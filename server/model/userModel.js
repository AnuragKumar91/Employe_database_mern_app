import mongoose from "mongoose";


//create a schema
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim:true,
        minlength:2,
        maxlength: 50,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true, // Convert email to lowercase
        unique: true, // Ensures uniqueness
        
        validate: {
            validator: function (v) {
                
                return /^[^.\s@]+(?:@[^.\s@]+)*\.[^.\s]+$/.test(v);

               
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        match:  [/^[6-9]\d{9}$/, 'Mobile number must start with 6 and have 10 digits'],
        trim: true,
        minlength: 10, 
        maxlength: 15 
    },
    password: {
        type: String,
      
        
        
    }
   
})
//create a model

export default mongoose.model("Anurag Kumar", userSchema);