import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api');

mongoose.connect(process.env.MONGO_URI!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB conectado com sucesso');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB', error);
  });

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});