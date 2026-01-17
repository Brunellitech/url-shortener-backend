import express from 'express';
import cors from 'cors';
import urlRoutes from './routes/url.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor rodando");
});

// Middlewares
app.use(cors());
app.use(express.json());

// Rota principal de teste
app.get('/teste', (req, res) => res.send('Servidor rodando!'));

// Conecta as rotas
app.use('/', urlRoutes);


