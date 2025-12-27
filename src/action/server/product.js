"use server";
// import { collections } from "@/lib/dbConnect";
import { collections, dbCollection } from "@/lib/dbConnect";
import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProducts = async () => {
  const collection = await dbConnect(dbCollection.PRODUCTS);
  const products = await collection.find().toArray();
  return products;
};

export const getSingleProducts = async (id) => {
  if (id.length != 24) {
    return {};
  }
  const query = { _id: new ObjectId(id) };
  const collection = await dbConnect("products");
  const product = await collection.findOne(query);

  return {product, _id:product._id.toString()} || {};
};
