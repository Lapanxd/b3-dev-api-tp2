import { liveScoreRepositoryAsync } from 'ynov-toulouse-b3-info-live-score-api';
import { liveScoreRepository } from './live-score.repository.js';
import { mapFromDto, mapToDto, mapFromPartialDto } from './live-score.mapper.js';

class LiveScoreService {
  findByPage = (pageIndex, pageSize) => {
    if (!pageIndex && !pageSize) {
      return liveScoreRepository.findAll()
        .then(models => ({
          items: models.map(mapToDto),
          totalCount: models.length,
        }));
    }
    pageIndex = Number(pageIndex);
    pageSize = Number(pageSize);
    return liveScoreRepository.findByPage(pageIndex * pageSize, pageSize)
      .then(({ items, count }) => ({
        items: items.map(mapToDto),
        totalCount: count,
      }));
  };

  findById = id => Promise.resolve(id)
    .then(id => Number(id))
    .then(id => liveScoreRepository.findById(id))
    .then(model => mapToDto(model));

  create = dto => Promise.resolve(dto)
    .then(dto => mapFromDto(dto))
    .then(model => liveScoreRepository.create(model))
    .then(model => mapToDto(model));

  update = (id, partialDto) => Promise.resolve({ id, partialDto })
    .then(({ id, partialDto }) => ({
      id: Number(id),
      model: mapFromPartialDto(partialDto),
    }))
    .then(({ id, model }) => liveScoreRepository.update(id, model))
    .then(model => mapToDto(model));
    
  replace = (id, dto) => Promise.resolve({ id, dto })
    .then(({ id, dto }) => ({
      id: Number(id),
      model: mapFromDto(dto),
    }))
    .then(({ id, model }) => liveScoreRepository.replace(id, model))
    .then(model => mapToDto(model));
  
  remove = id => Promise.resolve(id)
    .then(id => Number(id))
    .then(id => liveScoreRepository.remove(id))
    .then(() => undefined);
}

export const liveScoreService = new LiveScoreService();