const express = require('express');
const app = express();
const port = 3200;
const foodModel = require('./models/foodInfo');
// const { connect } = require('mongoose');
require('./db/conn');
app.use(express.json());
const cors = require('cors');
app.use(cors());



app.get('/', (req, res) => {
    res.send('<h2>Welcome to food api</h2>');

})
app.get('/seedata', async (req, res) => {
    try {
        const seeData = await foodModel.find({});
        console.log(seeData);
        //  res.status(201).send(seeData);
        res.status(200).json(seeData);
        res.end();

    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'error in internal server' });

    }
})
app.get('/seedata/:allergens', async (req, res) => {
    const allergens = req.params.allergens;
    try {
        const despData = await foodModel.findOne({ allergens: allergens })
        if (!despData) {
            return res.status(400).json({ error: 'allergens not found' });
        }
        res.status(200).json(despData);
        res.end()
    }
    catch (e) {
        console.log(e);
    }
})
// app.get('/example', (req, res) => {
//     // Perform some asynchronous operation
//     asyncFunction((err, result) => {
//         if (err) {
//             res.status(500).json({ error: 'Internal Server Error' });
//             return; // Ensure to return to prevent further execution
//         }

//         // Send response only after asynchronous operation completes
//         res.json(result);
//     });
// });

app.post('/foodModel', async (req, res) => {
    try {
        const addingFoodRecord = req.body;
        console.log(addingFoodRecord)
        const insertdata = await foodModel.create(addingFoodRecord);
        //const insertdata=await foodModel.create(req.body)
        // res.status(201).json(insertdata)
        console.log(insertdata);
        // res.json();
        // res.status(201).send(insertdata);
        res.status(201).json(insertdata)



    }

    catch (e) {
        console.error(e);
        res.status(500).json({ error: 'error in internal server' });

    }
})
//delete data from backend
app.delete("/foodModel/:food_item_name", async (req, res) => {
    const food_item_name = req.params.food_item_name;
    try {
        const deleteRecord = await foodModel.findOneAndDelete({ food_item_name });
        if (!deleteRecord) {
            return res.status(400).send({ error: "Food not found" });
        }
        res.status(200).json(deleteRecord);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});
app.put('/foodModel/:food_item_name', async (req, res) => {
    const food_item_name = req.params.food_item_name;
    try {
        const editData = await foodModel.findOneAndUpdate({ food_item_name: food_item_name },req.body,  { new: true });
        if (!editData) {
            return res.status(400).send({ error: "Food not found" });
        }
        res.status(200).json(editData);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
})
app.listen(port, () => {
    console.log(`server is listening at port number ${port}`);
})