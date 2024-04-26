const express = require("express");

const router = express.Router();

const tasks = require("../../models/contacts");

const Joi = require("joi");

const schemaPost = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.string().required(),
});

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
  // res.json({ message: "template message after '@ POST /api/contacts'" });

  const result = schemaPost.validate(req.body);
  if (result.error) {
    return res.status(400).json({ message: result.error.message });
  }

  const { name, email, phone } = req.body;
  const newContact = await tasks.addContact({ name, email, phone });

  if (!newContact) {
    res.status(400).json({ message: "Contact already exist" });
  } else {
    res.status(201).json(newContact);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
