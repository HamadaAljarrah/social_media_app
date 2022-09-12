import { Document, Schema } from "mongoose"
import mongooseServer from "../Common/services/mongoose.server"
import bcrypt from "bcrypt"

export interface UserDocument extends Document {
    name: string,
    email: string,
    password: string
}

const UserSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    {
        toJSON: {
            transform(doc, ret) {
                delete ret.password;
            }
        }
    },
)

UserSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next();
})

const User = mongooseServer.getInstance().model<UserDocument>('User', UserSchema);
export default User