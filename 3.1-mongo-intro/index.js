import mongoose from "mongoose";
import migrate from "./dataMigration/migration.js";

const dbUrl = "mongodb://localhost:27017/gigih";

async function main() {
    await mongoose.connect(dbUrl).then(() => console.log("Connected to the database")).catch(error => console.log(error));
    await mongoose.connection.dropDatabase();
    await migrate();
}

main().then(() => console.log("Migration succeded")).catch(error => console.log(error));

