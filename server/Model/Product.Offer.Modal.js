const mongoose=require('mongoose');
const validator=require('validator');
const Schema = mongoose.Schema;

const Product_Offer=new Schema({
    Product_Name:{
        type:String,
        trim:true,
        required:true,
    },
    Category_Id:{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required:true
    },
    Subcategory_Id:{
        type: Schema.Types.ObjectId,
        ref: 'Subcategory',
        required:true
    },
    Product_Price:{
        type:String,
        trim:true,
        required:true
    },
    Product_Stock:{
        type:String,
        trim:true,
        required:true
    },
    Product_Description:{
        type:String,
        trim:true,
        required:true
    },
    Product_Image:{
        type:String,
        trim:true,
        required:true
    },
    Product_Discount:{
        type:String,
        trim:true
    }
});

module.exports=mongoose.model("Product_Offer",Product_Offer);