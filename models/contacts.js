const fs = require("fs/promises");
const path = require("path");

const pathContactsFile = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  try {
    const contactsFile = await fs.readFile(pathContactsFile, "utf-8");
    const contacts = JSON.parse(contactsFile);
    // console.log("TEST listContacts"); // is OK
    return contacts;
  } catch (e) {
    return JSON.parse(e.message);
  }
};

const getContactById = async (contactId) => {
  try {
    const contactsFile = await fs.readFile(pathContactsFile, "utf-8");
    const contacts = JSON.parse(contactsFile);
    const [contact] = contacts.filter((elem) => elem.id === contactId);
    // console.log("TEST getContactById"); // is OK
    return contact;
  } catch (e) {
    return JSON.parse(e.message);
  }
};

const removeContact = async (contactId) => {};

const addContact = async (body) => {
  // console.log("TEST addContact"); // is OK
  try {
    const simpleId = new Date().getTime().toString(); //simple random id
    const rnd = Math.floor(Math.random() * Math.pow(10, 8)); //a random ending to add in addition to the length of the original id
    const newId = simpleId + rnd; //new random id with the length of the original id

    const newContact = {
      id: newId,
      name: body.name,
      email: body.email,
      phone: body.phone,
    };
    const contactsFile = await fs.readFile(pathContactsFile, "utf-8");
    const contacts = JSON.parse(contactsFile);
    if (
      contacts.find(
        (contact) =>
          contact.name.toUpperCase() === newContact.name.toUpperCase()
      )
    ) {
      return null;
    } else {
      contacts.push(newContact);
    }

    const updatedContactsJson = JSON.stringify(contacts, null, 2);

    fs.writeFile(pathContactsFile, updatedContactsJson, "utf-8");
    return newContact;
  } catch (e) {
    return JSON.parse(e.message);
  }
};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
