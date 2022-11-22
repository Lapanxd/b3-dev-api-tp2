import { userService } from "./user.service.js";

class UserController {
    findPage = (request, response, next) => {
        userService.findByPage(request.query.pageIndex, request.query.pageSize)
          .then(({ items, totalCount }) => {
            response.header('x-total-count', totalCount);
            response.json(items);
          })
          .catch(next);
    };

    findById = (request, response, next) => {
        userService.findById(parseInt(request.params.id))
          .then(item => response.json(item))
          .catch(next);
    };

    create = (request, response, next) => {
        userService.create(request.body)
          .then(item => response.status(201).json(item))
          .catch(next);
    };

    update = (request, response, next) => {
        userService.update(request.params.id, request.body)
          .then(item => response.json(item))
          .catch(next);
    };

    replace = (request, response, next) => {
        userService.replace(request.params.id, request.body)
          .then(item => response.json(item))
          .catch(next);
    };

    remove = (request, response, next) => {
        userService.remove(request.params.id)
          .then(() => response.status(204).json())
          .catch(next);
    };
}

export const userController = new UserController();