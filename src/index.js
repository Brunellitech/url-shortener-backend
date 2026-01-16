import express from 'express';
import cors from 'cors';
import urlRoutes from './routes/url.js';

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota principal de teste
app.get('/teste', (req, res) => res.send('Servidor rodando!'));

// Conecta as rotas
app.use('/', urlRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
