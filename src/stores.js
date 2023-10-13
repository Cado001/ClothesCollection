
import { ObjectId } from "mongodb";
import { db } from "./connectDb.js";
const storesDb = db.collection('clothes');


const theStore = {
    name: 'Webster',
    type: 'Designer',
    product: {
        jeans: '👖',
        shoes: '👟',
        shirt: '👕',
        accessories: '⌚️',
    size: 'S,M,L,XL,XXL',
    }
}

// Add a store 
export async function addAStore(){
    const storeAdded = await db.collection('store').insertOne(theStore);
    console.log('storeAdded ->', storeAdded)
}

// get all store
export async function getALLSTORES(){
    const storeList = await db.collection('store').find({}).toArray();
    console.table(storeList);
    console.table(storeList[0].product)
}


// Add a store2 
export async function addAStore2(){
    const store2Added = await db.collection('store2').insertOne(theStore2);
    console.log('store2Added ->', store2Added)
}

// get all store2
export async function getALLSTORES2(){
    const storeList = await db.collection('store2').find({}).toArray();
    console.table(store2List);
    console.table(store2List[0].product)
}

// Get Store By Id 
const theStore2 = {
    name: 'Webster',
    type: 'Designer',
    product: {
        jeans: '👖',
        shoes: '👟',
        shirt: '👕',
        accessories: '⌚️',
    size: 'S,M,L,XL,XXL',
    }
}


export async function getStoresByID(){
    const cleanId = new ObjectId('65296297d3275b4d9a709831')
    const findById = await storesDb.findOne({_id: cleanId});
    console.log('findById ->', findById)
}


