import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import starterRoutes from './routes/starter.route';
import questionRoutes from './routes/question.route';
import swaggerUi from 'swagger-ui-express';
import { swaggerOptions } from './swaggerOptions';
import swaggerJSDoc from 'swagger-jsdoc';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const specs = swaggerJSDoc(swaggerOptions);

app.use(cors());
app.use(express.json());

app.use('/api/starter', starterRoutes);
app.use('/api/question', questionRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
