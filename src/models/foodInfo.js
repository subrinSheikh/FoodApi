// const mongoose = require("mongoose");
// const foodSchema = new mongoose.Schema({
const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
//   food_item_name: {
//     type: String,
//     required: true,
//   },
  allergens:Array,
    food_group:String,
    description:String,
    ingredients:Array,
    serving_size:String,
    certifications:Array,
    food_item_name:String,
    health_benefits:Array,
    country_of_origin:String,
    preparation_methods:Array,
    dietary_restrictions:Array,
    brand_or_manufacturer:String,
    nutritional_information:Object,

//   food_group: String,
//   description: String,
//   ingredients: [String],
//   serving_size: String,
//   certifications: [String],
//   health_benefits: [String],
//   country_of_origin: String,
//   preparation_methods: [String],
//   dietary_restrictions: [String],
//   brand_or_manufacturer: String,
//   nutritional_information: {
//     fat: Number,
//     fiber: Number,
//     protein: Number,
//     calories: Number,
//     carbohydrates: Number,
//   },
//   allergens: [String],
});

const foodModel=new mongoose.model('foodModel',foodSchema);
module.exports=foodModel;



    
    
    


