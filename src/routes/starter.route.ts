import express from 'express';
import { getAllStarters, createStarter } from '../controllers/starter.controller';

const router = express.Router();

/**
 * @swagger
 * /api/starter:
 *   get:
 *     summary: Get all starters
 *     tags: [Starters]
 *     responses:
 *       200:
 *         description: List of starters
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Server error
 */
router.get('/', getAllStarters);

/**
 * @swagger
 * /api/starter:
 *   post:
 *     summary: Create a new starter
 *     tags: [Starters]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the starter
 *     responses:
 *       201:
 *         description: Starter created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Bad request - name is required
 *       500:
 *         description: Server error
 */
router.post('/', createStarter);

export default router;
