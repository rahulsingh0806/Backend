const Todo = require("../models/todoSchema");

exports.updateTodo = async(req,res) => {
    try{
        const {id} = req.params;
        const {title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description, updatedAt: Date.now()}
        )

        res.status(200).json({
            success:true,
            data:todo,
            message:"Todo data fetched and update successfully by given id"
        })
    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:"Facing error while fetching data"
        })
    }
}