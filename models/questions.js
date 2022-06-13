import mongoose from 'mongoose'
const Schema = mongoose.Schema


const questionSchema = new Schema({
qTitle:{
    type: String,
    require: true
},
qPoster:{
    type: String,
    require: true,
    },
qDate:{
    type:Date,
    default: new Date()
},
qBody:{
    type:String,
    require: true,
},
comment:{
    type: Array,
}
})

const questionModel = mongoose.model('Question', questionSchema)

export default questionModel