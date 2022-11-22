import { liveScoreService } from './liveScore.service.js';

class LiveScoreController {
    findPage = (request, response, next) => {
        liveScoreService.findByPage(request.query.pageIndex, request.query.pageSize)
          .then(({ items, totalCount }) => {
            response.header('x-total-count', totalCount);
            response.json(items);
          })
          .catch(next);
    };

    findById = (request, response, next) => {
        liveScoreService.findById(parseInt(request.params.id))
          .then(item => response.json(item))
          .catch(next);
    };

    create = (request, response, next) => {
        liveScoreService.create(request.body)
          .then(item => response.status(201).json(item))
          .catch(next);
    };
    
    update = (request, response, next) => {
        liveScoreService.update(request.params.id, request.body)
          .then(item => response.json(item))
          .catch(next);
    };
    
      replace = (request, response, next) => {
        liveScoreService.replace(request.params.id, request.body)
          .then(item => response.json(item))
          .catch(next);
    };
    
      remove = (request, response, next) => {
        liveScoreService.remove(request.params.id)
          .then(() => response.status(204).json())
          .catch(next);
    };

}

export const liveScoreController = new  LiveScoreController();