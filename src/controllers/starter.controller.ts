import { Request, Response } from 'express';
import prisma from '../models/prisma';

export const getAllStarters = async (_req: Request, res: Response) => {
  try {
    const starters = await prisma.starter.findMany();
    res.json(starters);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch starters' });
  }
};

export const createStarter = async (req: Request, res: Response) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ error: 'Name is required' });
    return;
  }

  try {
    const starter = await prisma.starter.create({ data: { name } });
    res.status(201).json(starter);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create starter' });
  }
};
