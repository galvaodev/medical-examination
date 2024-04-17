import express from 'express';
import { Examination } from '../models/examination';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const examination = new Examination(req.body);
    await examination.save();
    res.status(201).send(examination);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const examination = await Examination.find();
    res.send(examination);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const examination = await Examination.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(examination);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Examination.findByIdAndDelete(req.params.id);
    res.send({ message: 'Exame deletado com sucesso' });
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;