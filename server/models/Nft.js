const mongoose = require('mongoose');

const NftSchema = new mongoose.Schema({
    tokenId:{
        type:String,
        required : true,
        unique: true,
        trim: true,
    },
    storyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Story',
        required:[true,"Please provide associated story ID"],
    },
    storyHash:{
        type:String,
        required:true,
        index:true,
    },      
    metadataURI:{
        type:String,
        required:[true,"Please provide metadata URI"],
        trim:true,
    },
    metadata:{
        type:Object,
        required:[true,"Please provide metadata"],
    },
    mintedAt:{
        type:Date,
        required:true,
        default:Date.now,
    },
    mintedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:[true,"Please provide current owner"],
    },
    price:{
        type:Number,
        default:0,  
    },
    isListed:{
        type:Boolean,
        default:false,
    }
});

const Nft = mongoose.model('Nft',NftSchema);

module.exports = Nft;