const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/food_API')
.then(()=>{
    console.log("connected successfully")

}).catch((e)=>{
    console.log("not connected successfully",e)
})