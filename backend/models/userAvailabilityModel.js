import mongoose from 'mongoose';

const userAvailabilitySchema = new mongoose.Schema({
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
    duration: { type: Number, 
        required: true 
    },
  });

const UserAvailability = mongoose.model('UserAvailability', userAvailabilitySchema);
export default UserAvailability;
//