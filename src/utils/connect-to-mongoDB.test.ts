import 'dotenv/config'
import mongoose from "mongoose";
import connectToMongoDB from "./connect-to-mongoDB";

describe('initial connection to mongoDB', () => {

    it('connected to mongoBD', async () => {
        await connectToMongoDB(process.env.MONGODB_URI || '')
        expect(mongoose.connection.readyState).toBe(1)
    })
})