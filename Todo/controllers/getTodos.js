const Todo = require("../models/todoSchema");

exports.getTodos = async(req, res) => {
    try{
        const todo = await Todo.find({});

        res.status(200).json({
            success:true,
            data:todo,
            message:"All todo data fetched successfully"
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
exports.getTodoById = async(req, res) => {
    try{
        const id = req.params.id
        const todo = await Todo.findById({_id:id});
        if(!todo){
            return res.status(402).json({
                success:false,
                data:`No data found related to the given id ${id}`
            })
        }

        res.status(200).json({
            success:true,
            data:todo,
            message:"Todo data fetched successfully by given id"
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