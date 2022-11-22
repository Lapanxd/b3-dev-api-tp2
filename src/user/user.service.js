import { userRepository } from './user.repository.js';
import { mapToDto, mapFromDto, mapFromPartialDto } from './user.mapper.js';

class UserService {
  findByCredentials = (email, password) => userRepository
    .findByCredentials(email, password)
    .then(model => mapToDto(model));

  findByPage = (pageIndex, pageSize) => {
    if (!pageIndex && !pageSize) {
      return userRepository.findAll()
        .then(models => ({
          items: models.map(mapToDto),
          totalCount: models.length,
        }));
    }
    pageIndex = Number(pageIndex);
    pageSize = Number(pageSize);
    return userRepository.findByPage(pageIndex * pageSize, pageSize)
      .then(({ items, count }) => ({
        items: items.map(mapToDto),
        totalCount: count,
      }));
  };

  findById = id => Promise.resolve(id)
    .then(id => Number(id))
    .then(id => userRepository.findById(id))
    .then(model => mapToDto(model));

  create = dto => Promise.resolve(dto)
    .then(dto => mapFromDto(dto))
    .then(model => userRepository.create(model))
    .then(model => mapToDto(model));

  update = (id, partialDto) => Promise.resolve({ id, partialDto })
    .then(({ id, partialDto }) => ({
      id: Number(id),
      model: mapFromPartialDto(partialDto),
    }))
    .then(({ id, model }) => userRepository.update(id, model))
    .then(model => mapToDto(model));

  replace = (id, dto) => Promise.resolve({ id, dto })
    .then(({ id, dto }) => ({
      id: Number(id),
      model: mapFromDto(dto),
    }))
    .then(({ id, model }) => userRepository.replace(id, model))
    .then(model => mapToDto(model));
}

export const userService = new UserService();
