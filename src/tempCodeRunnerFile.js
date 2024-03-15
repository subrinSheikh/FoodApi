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