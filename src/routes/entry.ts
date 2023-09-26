import { Request, Response, Router } from "express";
import entries from "../entries/entries.json"

const router = Router();

router.get('/entries', async (req: Request, res: Response) => {
  try {
    res.status(200).json({ data: entries });
  } catch (e: any) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
})

router.get('/entries/:id', async (req: Request, res: Response) => {
  const id = req.params.id

  if (isNaN(Number(id))) {
    res.status(400).json({ message: "ID must be a number" });
    return
  }

  try {
    const entry = entries.find((entry: any) => entry.id === Number(id))

    if (!entry) {
      res.status(404).json({ message: `Entry with id: ${id} does not exist` });
    } else {
      res.status(200).json({
        data: entry
      });
    }
  } catch (e: any) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
})

export default router;
