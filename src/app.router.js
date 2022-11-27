import express from 'express';
import { authRouter } from './auth/auth.router.js';
import { liveScoreRouter } from './live-score/live-score.router.js';
import { userRouter } from './user/user.router.js';

export const appRouter = express.Router();
appRouter.use('/auth', authRouter);
appRouter.use('/live-scores', liveScoreRouter);
appRouter.use('/users', userRouter);
