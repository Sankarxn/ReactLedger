import express from "express";
import { adddata, deletedata, getdata, getdataById, updatedata } from "../controller/employeecontroller.js";

const router =express.Router()
router.post("/addemployee", adddata);
router.get("/getemployee", getdata);
router.delete("/deleteemployee/:id", deletedata);
router.get("/getemployee/:id", getdataById);
router.put("/updateemployee/:id", updatedata);


export default router;