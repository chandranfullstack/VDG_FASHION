import mongoose from "mongoose";
import { generateUUID } from "../../../utils/helpers.js";
import { Sequence } from "../../helpers/sequence.js";

const categorySchema = new mongoose.Schema({
    id : {
       type: Number,
       unique : true 
    },
    uuid : {
      type: String,
      unique : true
    },
    icon : {
        type: String
    },
    identity:{
        type:String,
        required:true,
    },
    description : {
        type: String
    },
    slug : {
      type: String,
      required : true 
    },
    image:{
        type:String
    },
    is_child : {
        type: Boolean,
        default: false
    },
    parent : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        default : null
    },
    tags : {
        type : Array,
        default : []
    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
},
    {
        timestamps:true,
    }
);

categorySchema.pre("save", async function(next){
    if(!this.id){
      try {
      const uuid = await generateUUID()
      const sequence = await Sequence.findByIdAndUpdate("Category",{ $inc: { seq: 1}},{ new: true, upsert: true }) 
      this.uuid = uuid
      this.id = sequence.seq
      next()
      } catch (error) {
        next(error)
      }
    }else{
        next()
    }
})

export default mongoose.model('category', categorySchema);