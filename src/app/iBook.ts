import { ObjectId } from "mongoose";

export interface IBook {
  _id?: ObjectId,
  id: number;
  name: string;
  description: string;
  }