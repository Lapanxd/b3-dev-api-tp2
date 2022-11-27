import express from 'express';
import { checkIdMiddleware } from '../common/check-id.middleware.js';
import { checkPaginationMiddleware } from '../common/check-pagination.middleware.js';
import { checkAuthorizationToken, checkRoleToken, checkId } from '../auth/auth.middleware.js';
import { userController } from './user.controller.js';
import { checkPartialUserMiddleware, checkUserMiddleware } from './checkUser.middleware.js';

export const userRouter = express.Router();
userRouter.get('/',checkAuthorizationToken ,checkPaginationMiddleware, checkRoleToken('admin'), userController.findPage);
userRouter.get('/:id', checkAuthorizationToken, checkRoleToken(['contributor', 'admin']), checkId, checkIdMiddleware, userController.findById);
userRouter.post('/', checkAuthorizationToken,checkRoleToken('admin'), checkUserMiddleware, userController.create);
userRouter.patch('/:id', checkAuthorizationToken, checkRoleToken('admin'), checkIdMiddleware, checkPartialUserMiddleware, userController.update);
userRouter.put('/:id', checkAuthorizationToken, checkRoleToken('admin'), checkIdMiddleware, checkUserMiddleware, userController.replace);
userRouter.delete(':id', checkAuthorizationToken, checkRoleToken('admin'), checkIdMiddleware, userController.remove);