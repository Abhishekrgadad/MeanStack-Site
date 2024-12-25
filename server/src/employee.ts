import * as mongodb from "mongodb";

export interface Employee{
    name : String;
    position: String;
    level: "junior" | "mid" | "senior";
    _id?: mongodb.ObjectId;
}