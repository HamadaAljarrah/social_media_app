import mongoose from "mongoose";




class MongooseService {
    private mongooseOption = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 3000,
    }

    constructor() { this.connect(); }

    connect() {
        const uri = process.env.MONGO_URI || "";
        mongoose.connect(uri, this.mongooseOption)
            .then(() => console.log("Conntected to MangoDB"))
            .catch((err) => {
                const retrySeconds = 3;
                console.log("Error occured: " + err)
                console.log(`Server will reconnect to database in ${retrySeconds} seconds`)
                setTimeout(this.connect, retrySeconds * 1000)
            })
    }
    getInstance() {
        return mongoose;
    }
}

export default new MongooseService();