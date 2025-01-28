import express, { Request, Response } from "express";

const router = express.Router();

router.post("/my-hotels", (req: Request, res: Response) => {
  res.json({ message: "You hit the my-hotels endpoint" });
});
