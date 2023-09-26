import { Router, Request, Response } from 'express'
import availableLocales from '../utils/availableLocales';

const router = Router()

router.get('/locales', (req: Request, res: Response) => {
  res.status(200).json({ data: availableLocales });
})

export default router;
