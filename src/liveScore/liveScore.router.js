import express from 'express';
import { liveScoreController } from './liveScore.controller.js';
import { checkIdMiddleware } from '../common/check-id.middleware.js';
import { checkPaginationMiddleware } from '../common/check-pagination.middleware.js';
import { checkAuthorizationToken, checkRoleToken } from '../auth/auth.middleware.js';
import { checkLiveScoreMiddleware, checkPartialLiveScoreMiddleware } from './checkLiveScore.middleware.js';

export const liveScoreRouter = express.Router();
liveScoreRouter.get('/', checkPaginationMiddleware, liveScoreController.findPage);
liveScoreRouter.get('/:id', checkIdMiddleware, liveScoreController.findById);
liveScoreRouter.post('/', checkAuthorizationToken, checkLiveScoreMiddleware, liveScoreController.create);
liveScoreRouter.patch('/:id', checkAuthorizationToken, checkIdMiddleware, checkPartialLiveScoreMiddleware, liveScoreController.update);
liveScoreRouter.put('/:id', checkAuthorizationToken, checkIdMiddleware, checkLiveScoreMiddleware, liveScoreController.replace);
liveScoreRouter.delete('/:id', checkAuthorizationToken, checkRoleToken('admin'), checkIdMiddleware, liveScoreController.remove);