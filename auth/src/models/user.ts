import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

export interface UserDoc extends mongoose.Document {
    _id: string;
    username: string;
    password: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
    username: string;
    password: string;
}

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: false,
    },
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
