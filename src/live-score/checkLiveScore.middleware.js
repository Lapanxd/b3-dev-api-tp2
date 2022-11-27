import { DateTime } from 'luxon';
import { ResourceFormatException } from '../common/app-exception.js';

export const checkLiveScoreMiddleware = (request, response, next) => {
  if (!request.body.homeTeamName || typeof request.body.homeTeamName !== 'string'
    || !request.body.awayTeamName || typeof request.body.awayTeamName !== 'string'
    || !request.body.homeTeamScore || typeof request.body.homeTeamScore !== 'number'
    || !request.body.awayTeamScore || typeof request.body.awayTeamScore !== 'number'
    || !request.body.date || typeof request.body.date !== 'string' || !DateTime.fromISO(request.body.date).isValid) {
    next(new ResourceFormatException());
  } else {
    next();
  }
};

export const checkPartialLiveScoreMiddleware = (request, response, next) => {
  if (request.body.homeTeamName && typeof request.body.homeTeamName !== 'string'
    || request.body.awayTeamName && typeof request.body.awayTeamName !== 'string'
    || request.body.homeTeamScore && typeof request.body.homeTeamScore !== 'number'
    || request.body.awayTeamScore && typeof request.body.awayTeamScore !== 'number'
    || request.body.date && (typeof request.body.date !== 'string' || !DateTime.fromISO(request.body.date).isValid)) {
      next(new ResourceFormatException());
  } else {
    next();
  }
};