import { closeClient } from "./src/connectDb.js";
// import { addAnItem, getALLCLOTHES, updateItem } from "./src/clothes.js";

import { addAStore, addAStore2, getStoresByID, getALLSTORES } from "./src/stores.js";

// await addAStore() ;

// await addAnItem();
// await getALLCLOTHES();
// await updateOneItem();
await getALLSTORES();
// await getStoresByID();




closeClient();