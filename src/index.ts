import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"]
}));

routes(app);

app.listen(8000, () => {
    console.log('api running on port 8000')

});