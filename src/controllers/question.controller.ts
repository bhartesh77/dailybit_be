import { Request, Response } from 'express';
import prisma from '../models/prisma';

export const getQuestion = async (req: Request, res: Response) => {
    try {
        const question = await prisma.question.findFirst({
            where: {
                id: req.params.id,
            },
        });
        res.json(question);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch question' });
    }
}

export const createQuestion = async (req: Request, res: Response) => {
    try {
        const question = await prisma.question.create({
            data: req.body,
        });
        // const questionChoice = await prisma.questionChoice.createManyAndReturn({
        //     data: req.body.questionChoices,
        // });
        // const questionTag = await prisma.questionTag.createManyAndReturn({
        //     data: req.body.questionTags,
        // });
        res.status(201).json({
            question,
            // questionChoice,
            // questionTag,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
}

export const updateQuestion = async (req: Request, res: Response) => {
    try {
        const question = await prisma.question.update({
            where: { id: req.params.id },
            data: req.body,
        });
        res.json(question);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update question' });
    }
}
