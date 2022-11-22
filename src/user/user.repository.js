import { UserModel } from './user.model.js';

class UserRepository {
  findByCredentials = (email, password) => UserModel.findOne({ where: { email, password }, rejectOnEmpty: true });

  findAll = () => UserModel.findAll();

  findByPage = (offset, limit) => UserModel.findAndCountAll({limit, offset})
    .then(({rows: item, count}) => ({item, count}));

  findById = id => UserModel.findByPk(id, {rejectOnEmpty: true });

  create = item => UserModel.create(item);

  update = (id, item) => this.findById(id)
      .then(itemToUpdate => itemToUpdate.update(item))
      .then(() => this.findById(id));

  replace = (id, item) => this.findById(id)
    .then(itemToUpdate => itemToUpdate.update(item))
    .then(() => this.findById(id));

  remove = id => this.findById(id)
    .then(() => LiveScoreModel.destroy({ where: { id } }));
}

export const userRepository = new UserRepository();
