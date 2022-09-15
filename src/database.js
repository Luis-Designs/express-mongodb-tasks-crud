import { connect } from "mongoose";
import { MONGODB_URI } from "./config.js";

(async () => {
    try {
        const db = await connect(MONGODB_URI)
        console.log('DB connected to', db.connection.name);
    } catch (error) {
        console.log("🚀 ~ file: database.js ~ line 8 ~ error", error)
    }
})()
