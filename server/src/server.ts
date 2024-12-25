import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectToDatabase } from "./database";

dotenv.config();

const {ATLAS_URI} = process.env;

if(!ATLAS_URI){
    console.error("No ATLAS URI environment variable is defined in config.env");
    process.exit(1);
}

connectToDatabase(ATLAS_URI)
    .then(() => {
        const app = express();
        app.use(cors());
        
        app.listen(5200, ()=>{
            console.log(`Server is running at http://localhost:5200`);
        });
    })
    .catch((error) => console.error(error));
    
