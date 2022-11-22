import express from 'express';
import { authRouter } from './auth/auth.router.js';
import { liveScoreRouter } from './liveScore/liveScore.router.js';
import { userRouter } from './user/user.router.js';

export const appRouter = express.Router();
appRouter.use('/auth', authRouter);
appRouter.use('/live-scores', liveScoreRouter);
appRouter.use('/users', userRouter);
