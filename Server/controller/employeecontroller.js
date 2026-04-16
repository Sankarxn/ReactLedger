import employee from "../Model/employee.js";

export const adddata = async (req, res) =>{
    console.log(req.body);
    const {name, age, designation, salary} = req.body;
    try{
        const exist = await employee.findOne({name});
        if(exist){
            res.status(401).json({message:"Employee already exist"});
        }
        const newemployee = new employee({name, age, designation, salary});
        await newemployee.save();
        res.status(200).json({message:"Data added successfully"});
    } catch(error){
        res.status(500).json({message:"Server side error"});
    }
    
}

export const getdata = async (req, res) =>{
    try{
        const result =await employee.find();
        res.status(200).json({employeedata:result});

    }catch(error){
        res.status(500).json({message:"Server side error"});
    }
}

export const deletedata = async (req, res) =>{
    try{
        const id = req.params.id;
        const result = await employee.findByIdAndDelete(id);
        if(result){
            res.status(200).json({message:"Data deleted successfully"});
        }else{
            res.status(404).json({message:"Data not found"});
        }
    }catch(error){
        res.status(500).json({message:"Server side error"});

    }
}

export const getdataById = async (req, res) =>{
    try{
        const id = req.params.id;
        const result = await employee.findById(id);
        console.log("Hit");
        
        if(result){
            res.status(200).json({employeedata:result});
        }else{
            res.status(404).json({message:"Data not found"});
        }
    }catch(error){
        res.status(500).json({message:"Server side error"});

    }
}

export const updatedata = async (req, res) =>{
    try{
        const {name, age, designation, salary} = req.body;
        const id = req.params.id;
        const result = await employee.updateMany({_id:id}, {$set: {name, age, designation, salary}});
        if(result){
            res.status(200).json({message:"Data updated successfully"});
        }else{
            res.status(404).json({message:"Data not found"});
        } 
    }catch(error){
        res.status(500).json({message:"Server side error"});
    }
}