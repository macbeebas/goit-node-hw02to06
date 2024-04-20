// File for testing random id
//
// const { uuid } = require("uuidv4");
import { uuid } from "uuidv4";

const id = new Date().getTime().toString(); //simple random id
console.log("id:", id);

const uid = uuid(); //random id by 'uuidv4'
console.log("uuidv4:", uid);
