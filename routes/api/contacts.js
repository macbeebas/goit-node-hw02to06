const express = require("express");

const router = express.Router();

const tasks = require("../../models/contacts");

router.get("/", async (req, res, next) => {
  // res.json({ message: 'template message "@ GET /api/contacts"' });
  const contacts = await tasks.listContacts();
  res.status(200).json({ contacts, itemCount: contacts.length });
});

router.get("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
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
