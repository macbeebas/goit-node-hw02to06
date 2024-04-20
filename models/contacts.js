const fs = require("fs/promises");
const path = require("path");

const pathContactsFile = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  try {
    const contactsFile = await fs.readFile(pathContactsFile, "utf-8");
    const contacts = JSON.parse(contactsFile);
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
    return contact;
  } catch (e) {
    return JSON.parse(e.message);
  }
};

const removeContact = async (contactId) => {};

const addContact = async (body) => {};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
