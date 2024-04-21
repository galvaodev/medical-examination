import cors from 'cors';
import express from 'express';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import examinationRoute from './routes/exanmination.routes';

const app = express();
const port = 3000;


app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


app.use('/examination', examinationRoute);


async function startMongoMemoryServer(): Promise<void> {
  const mongoServer = await MongoMemoryServer.create();
  const mongoUri = await mongoServer.getUri();

  await mongoose.connect(mongoUri, {dbName: 'medical'});
  console.log('Conectado ao MongoDB em memória');
}

startMongoMemoryServer().then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}).catch(err => {
  console.error('Erro ao iniciar o MongoDB Memory Server:', err);
});