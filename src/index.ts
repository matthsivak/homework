import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { validateToken } from "./middleware/tokenValidation.ts";
import { errorHandler } from "./middleware/errorHandlerer.ts";
import { notFound } from "./utils/notFound.ts";
import locale from "./routes/locale.ts";
import entry from "./routes/entry.ts";
import project from "./routes/project.ts";

const port = 5090;
const app = express();

if (!port) {
  console.log('Port is not defined. Aborting...');
  process.exit(1);
}

app.use(cors({
  origin: `http://localhost:${port}`,
}))
app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json());
app.use(validateToken);

app.use('/api', locale);
app.use('/api', entry);
app.use('/api', project);

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
