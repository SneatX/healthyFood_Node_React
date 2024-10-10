const Food = require('../../domain/models/foodModel')
const { ObjectId } = require("mongodb");
async function getAllFood(req, res, next) {
    let FoodInstance = new Food()

    let foods = await FoodInstance.getAllFoods()
    return res.status(200).json(foods)
}

async function updateStars(req, res, next) {
    let foodInstance = new Food()

    let rating = await foodInstance.getRatingByFoodIdUserId(req.body.id, req.user._id)
    if(rating) await foodInstance.deleteRatingById(rating._id)
    console.log(rating)
    try{
        let aggregateResult
        if(rating){
            console.log("si existe")
            aggregateResult = await foodInstance.aggregate([
                {
                    $match: { _id: new ObjectId(req.body.id) }
                },
                {
                    $set: {
                        ratings: {
                            $let: {
                                vars: {
                                    index: { $indexOfArray: ["$ratings", rating.star] }
                                },
                                in: {
                                    $cond: {
                                        if: { $ne: ["$$index", -1] },
                                        then: {
                                            $concatArrays: [
                                                { $slice: ["$ratings", "$$index"] },  
                                                { $slice: ["$ratings", { $add: ["$$index", 1] }, { $size: "$ratings" }] }  
                                            ]
                                        },
                                        else: "$ratings"
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    $set: {
                        ratings: {
                            $concatArrays: [
                                "$ratings",
                                [req.body.newStar]
                            ]
                        }
                    }
                },
                {
                    $set: {
                        average: {
                            $avg: "$ratings"
                        }
                    }
                }
            ]);
        }else {
            aggregateResult = await foodInstance.aggregate([
                {
                    $match: { _id: new ObjectId(req.body.id) }
                },
                {
                    $set: {
                        ratings: {
                            $concatArrays: [
                                "$ratings",
                                [{ $literal: req.body.newStar }]
                            ]
                        }
                    }
                },
                {
                    $set: {
                        average: {
                            $avg: {
                                $concatArrays: [
                                    "$ratings",
                                    [req.body.newStar]
                                ]
                            }
                        }
                    }
                }
            ]);
        }
        
    
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

        let newRatingResult = await foodInstance.insertRating(newRating);

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
    console.log(search)
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