import {Contact} from '../Models/Contact.js'


//get all contact

export const getAllContact = async(req,res)=>{
    const userContact = await Contact.find();

    if(!userContact){
        return res.json({message:'No contact found',success:false})
    }

    res.json({message:'All contact Fatched',userContact})
}

//Create new Contact

export const newCotact = async(req,res)=>{

    const {name,email,phone,type} = req.body;

    if(name==""||email==""||phone==""||type==""){
        return res.json({message:"all fields are required",success:true})

    }
    let savedContact = await Contact.create({
        name,
        email,
        phone,
        type,
        user:req.user
    })

    res.status(201).json({message:'contact saved successfully...',savedContact,success:true})

}


//Update Contact by id
export const updateContactById = async(req,res)=>{
    const id = req.params.id;
    const {name,email,phone,type} = req.body;

    let updatedContact = await Contact.findByIdAndUpdate(id,{
        name,
        email,
        phone,
        type,
    },{new: true})

    if(!updatedContact){
        return res.json({message:'No conatact exist ',success:false})

    }

    res.json({message:'contact updated successfully',updatedContact,success:true})

}

//Delete Contact by Id

export const deleteContactById = async(req,res)=>{
    const id = req.params.id;
    

    let deleteContact = await Contact.findByIdAndDelete(id)

    if(!deleteContact){
        return res.json({message:'No conatact exist ',success:false})

    }

    res.json({message:'contact deleted successfully',success:true})

}


//get contact by id

export const getContactById = async(req,res)=>{
    const id = req.params.id;
    const userContact = await Contact.findById(id);
    if(!userContact){
        return res.json({message:"No contact found",success:false})
    }
    res.json({message:"Contact Fatched",userContact,success:true})

}


//get contact by user id

export const getContactByUserId = async(req,res)=>{
    const id = req.params.id;
    const userContact = await Contact.find({user:id});
    if(!userContact){
        return res.json({message:"No contact found",success:false})
    }
    res.json({message:"user spacific Contact Fatched",userContact,success:true})

}





