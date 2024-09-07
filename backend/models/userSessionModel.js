import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    type : {type : String,
        enum : ['one-on-one', 'grouped'],
        default: 'one-on-one'
    },
    user: { type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    startDate: { type: Date, 
        required: true 
    },
    endDate: { type: Date, 
        required: true 
    },
});

const userSession = mongoose.model('userSession', sessionSchema);
export default userSession;

//
