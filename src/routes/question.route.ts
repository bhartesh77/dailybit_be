import express from 'express';
import { getQuestion, createQuestion, updateQuestion } from '../controllers/question.controller';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Question:
 *       type: object
 *       required:
 *         - text
 *         - difficulty
 *         - status
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for the question
 *         text:
 *           type: string
 *           description: The question text
 *         difficulty:
 *           type: string
 *           enum: [EASY, MEDIUM, HARD]
 *           description: The difficulty level of the question
 *         status:
 *           type: string
 *           enum: [DRAFT, PUBLISHED, ARCHIVED]
 *           description: The status of the question
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the question was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the question was last updated
 *     Error:
 *       type: object
 *       required:
 *         - error
 *       properties:
 *         error:
 *           type: string
 *           description: Error message
 *     CreateQuestionRequest:
 *       type: object
 *       required:
 *         - text
 *         - difficulty
 *       properties:
 *         text:
 *           type: string
 *           description: The question text
 *         difficulty:
 *           type: string
 *           enum: [EASY, MEDIUM, HARD]
 *           description: The difficulty level of the question
 *         status:
 *           type: string
 *           enum: [DRAFT, PUBLISHED, ARCHIVED]
 *           default: DRAFT
 *           description: The status of the question (defaults to DRAFT)
 *     UpdateQuestionRequest:
 *       type: object
 *       properties:
 *         text:
 *           type: string
 *           description: The question text
 *         difficulty:
 *           type: string
 *           enum: [EASY, MEDIUM, HARD]
 *           description: The difficulty level of the question
 *         status:
 *           type: string
 *           enum: [DRAFT, PUBLISHED, ARCHIVED]
 *           description: The status of the question
 * 
 * /api/question/{id}:
 *   get:
 *     summary: Get a question by ID
 *     tags: [Questions]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the question to retrieve
 *     responses:
 *       200:
 *         description: A question object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Question'
 *       404:
 *         description: Question not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *   put:
 *     summary: Update a question by ID
 *     tags: [Questions]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the question to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateQuestionRequest'
 *     responses:
 *       200:
 *         description: Question updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Question'
 *       404:
 *         description: Question not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 * 
 * /api/question:
 *   post:
 *     summary: Create a new question
 *     tags: [Questions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateQuestionRequest'
 *     responses:
 *       201:
 *         description: Question created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Question'
 *       400:
 *         description: Bad request - invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

router.get('/:id', getQuestion);
router.post('/', createQuestion);
router.put('/:id', updateQuestion);

export default router;
