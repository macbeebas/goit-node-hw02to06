// File for testing random id
//
// const { uuid } = require("uuidv4");
import { uuid } from "uuidv4";

const simpleId = new Date().getTime().toString(); //simple random id
const rnd = Math.floor(Math.random() * Math.pow(10, 8)); //a random ending to add in addition to the length of the original id
const newId = simpleId + rnd; //new random id with the length of the original id

console.log("simple id:", simpleId);
console.log("random ending:", rnd);
console.log("org id: qdggE76Jtbfd9eWJHrssH");
console.log("new id:", newId);

const uid = uuid(); //random id by 'uuidv4'
console.log("uuidv4:", uid);
