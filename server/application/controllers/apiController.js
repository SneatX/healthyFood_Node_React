const Food = require('../../domain/models/foodModel')


async function searchFood(req, res, next) {
    const search = req.query.food
    console.log(search)
    if(!search) return res.status(400).json({msj: "search is required"})

    let FoodInstance = new Food()
    const foods = await FoodInstance.findByName(search)
    return res.status(200).json(foods)
}

module.exports = {searchFood}