import express from 'express';
import { nanoid } from 'nanoid';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.post('/encurtar', async (req, res) => {
  try {
    const { url_original } = req.body

    if (!url_original) {
      return res.status(400).json({ erro: 'URL original é obrigatória'})
    }

  const short = nanoid(6)

  const novaUrl = await prisma.url.create({
      data: {
      url_original,
      short
    }
  })

  res.status(201).json(novaUrl)
} catch (erro) {
  console.error(erro)
  res.status(500).json({ erro: 'Erro ao encurtar a URL'})
}
})

router.get('/:codigo', async (req, res) => {
  try {
    const { codigo } = req.params

    const url = await prisma.url.findUnique({
      where: { short: codigo }
    })

    if(!url){
      return res.status(404).json({ erro: 'URL não encontrada' })
    }

    res.redirect(url.url_original)
  } catch ( erro ) {
    console.error(erro)
    res.status(500).json({ erro: 'Erro ao redirecionar' })
  }
})

export default router;
