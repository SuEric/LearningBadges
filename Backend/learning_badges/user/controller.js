import jwt from 'jwt-simple';
import config from '../../config/env';
import * as Error from '../exceptions/constants';
import ExceptionHandler from '../exceptions/handler';
import { User } from './user';

class UserController {

  static signUp (req, res, next) {
    new User({
      email: req.body.email,
      password: req.body.password,
      type: req.body.userType,
    })
      .save()
      .then((user) => {
        const token = jwt.encode(user, config.jwtSecret);
        res.json({
          message: 'User created successfully',
          token: `JWT ${token}`,
        });
      })
      .catch((err) => {
        next(err);
      });
  }

  static get (req, res, next) {
    if (!req.user.isAdmin) {
      throw ExceptionHandler.forbiddenException(Error.USER_NOT_ADMIN);
    } else {
      User
        .find()
        .then((users) => {
          res.json(users);
        });
    }
  }

  static getById (req, res, next) {
    if (!req.user.isAdmin && req.user._id.toString() !== req.params.userId) {
      throw ExceptionHandler.forbiddenException(Error.USER_NOT_ADMIN);
    } else {
      User
        .findOne({_id: req.params.userId})
        .then((user) => {
          if (!user) {
            return Promise.reject(ExceptionHandler.badRequestException(Error.USER_DOES_NOT_EXIST));
          } else {
            res.json(user);
          }
        })
        .catch((err) => {
          next(err);
        });
    }
  }

  static update (req, res, next) {
    if (!req.user.isAdmin && req.user._id.toString() !== req.params.userId) {
      throw ExceptionHandler.forbiddenException(Error.USER_NOT_ENOUGH_PERMISSIONS);
    } else {
      User
        .findByIdAndUpdate(
          req.params.userId,
          req.body,
          {new: true})
        .then((user) => {
          res.json({
            message: 'The user has been updated!',
            data: user,
          });
        })
        .catch((err) => {
          next(err);
        });
    }
  }
}

export default UserController;
