import { ResourceFormatException } from '../common/app-exception.js';

export const checkUserMiddleware = (request, response, next) => {
    if(!request.body.username || typeof request.body.username !== 'string'
    || !request.body.password || typeof request.body.password !== 'string'
    || !request.body.role || typeof request.body.role !== 'string'){
        next(new ResourceFormatException());
    } else {
        next();
    }
};

export const checkPartialUserMiddleware = (request, response, next) => {
    if(request.body.username && typeof request.body.username !== 'string'
    || request.body.password && typeof request.body.password !== 'string'
    || request.body.role && typeof request.body.role !== 'string'){
        next(new ResourceFormatException());
    } else {
        next();
    }
};