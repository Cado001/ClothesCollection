import { ObjectId } from "mongodb";
import { db } from "./connectDb.js";
const clothesDb = db.collection('clothes');

const theClothes = {
    brand: 'Louis Vuitton',
    color: 'Green',
    size: 'Large',
    type: 'SweatShirt',
    quality: 'Cotton',
    origin: 'France'

}

// Add an item 
export async function addAnItem() {
    const itemAdded = await db.collection('clothes').insertOne(theClothes);
    console.log('itemAdded ->', itemAdded)
}

// Get all clothes
export async function getALLSTORES() {
    const itemList = await db.collection('clothes').find({}).toArray();
    console.table(itemList);

}

// Update an item
export async function updateOneItem(){
     const cleanId = new ObjectId ('65296297d3275b4d9a709831')
     const dataToUpdate = { type: 'shirt'}
     const updatedItem = await clothesDb.findOneAndUpdate({_id: cleanId}, {$set: dataToUpdate})
     console.log('updateItem ->', updatedItem)
    }
    
    