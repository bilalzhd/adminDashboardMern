import express from 'express';
import { getSales } from '../controllers/sales.js'
const router = express.Router();
export default router;

router.get("/sales", getSales)