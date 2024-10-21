const Food = require('../../domain/models/foodModel')
const Rating = require('../../domain/models/ratingModel')
const { ObjectId } = require("mongodb");
async function getAllFood(req, res, next) {
    let FoodInstance = new Food()

    let foods = await FoodInstance.getAllFoods()
    return res.status(200).json(foods)
}

async function updateStars(req, res, next) {
    let foodInstance = new Food()
    let ratingInstance = new Rating()

    let rating = await ratingInstance.getRatingByFoodIdUserId(req.body.id, req.user._id)
    if(rating) await ratingInstance.deleteRatingById(rating._id)
    try{
        let aggregateResult = rating ?
            await foodInstance.updateFoodRating(req.body.id, rating.star, req.body.newStar): 
            await foodInstance.newFoodRating(req.body.id, req.body.newStar)
        
        let updatedRatings = aggregateResult[0].ratings;
        let newAverage = aggregateResult[0].average;
    
        await foodInstance.updateFood(req.body.id, {
            ratings: updatedRatings,
            average: newAverage
        });

        let newRating = {
            foodId: new ObjectId(req.body.id),
            userId: new ObjectId(req.user._id),
            star: req.body.newStar
        }

        let newRatingResult = await ratingInstance.insertRating(newRating);

        return res.status(200).json({
            message: "Food ratings updated successfully",
            updatedRatings: updatedRatings,
            newAverage: newAverage
        })
    } catch (err) {
        return res.status(500).json({ message: "Error al actualizar los ratings", errType: 5 })
    }
}

async function searchFood(req, res, next) {
    const search = req.query.food
    if (!search) return res.status(400).json({ msj: "search is required" })

    let FoodInstance = new Food()
    const foods = await FoodInstance.findByName(search)
    return res.status(200).json(foods)
}

async function getFoodCategories(req, res, next) {
    let foodInstance = new Food()
    const categories = await foodInstance.aggregate([
        {
            $group: {
                _id: null,
                categories: {
                    $addToSet: "$category",
                },
            },
        },
        {
            $project: {
                categories: 1,
                _id: 0,
            },
        },
    ])
    return res.status(200).json(categories)
}

module.exports = { searchFood, getFoodCategories, getAllFood, updateStars }