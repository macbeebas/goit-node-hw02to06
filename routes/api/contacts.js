const express = require("express");

const router = express.Router();

const tasks = require("../../models/contacts");

router.get("/", async (req, res, next) => {
  // res.json({ message: "template message after '@ GET /api/contacts'" });
  const contacts = await tasks.listContacts();
  res.status(200).json({ contacts, itemCount: contacts.length });
});

router.get("/:contactId", async (req, res, next) => {
  // res.json({ message: "template message after '@ GET /api/contacts/:id'" });
  const { contactId } = req.params;
  const contact = await tasks.getContactById(contactId);

  if (!contact) {
    res.status(404).json({ message: "Not found" });
  } else {
    res.status(200).json(contact);
  }
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
