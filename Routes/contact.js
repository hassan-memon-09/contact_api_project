import express from "express";
import {
  deleteContactById,
  getAllContact,
  getContactById,
  getContactByUserId,
  newCotact,
  updateContactById,
} from "../Controllers/contact.js";
import { isAuthenticated } from "../Middlewares/Auth.js";

const router = express.Router();

//New Contact
//@api dsc :- Creating contact
//@api method :- post
//@api endPoint :- /api/contact/new

router.post("/new", isAuthenticated, newCotact);

//get all contact

router.get("/", getAllContact);

//get contact by id
router.get("/:id", getContactById);

//Update Contact by Id
router.put("/:id", isAuthenticated, updateContactById);

//Delete contact by id

router.delete("/:id", isAuthenticated, deleteContactById);

//get user specific contact
router.get("/userid/:id", getContactByUserId);

export default router;
