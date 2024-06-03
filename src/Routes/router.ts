import express, { Router } from "express";
import { createContent, getAllContent } from "../controller/content";

const router:Router = express.Router()

router.route("/addContent").post(createContent)
router.route("/getContent").get(getAllContent)

export default router