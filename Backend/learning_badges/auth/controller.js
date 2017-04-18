import jwt from 'jwt-simple';
import config from '../../config/env';
import { User } from '../user';
import * as Error from '../exceptions/constants';
import ExceptionHandler from '../exceptions/handler';

class AuthController {

  static signIn (req, res, next) {
    User
      .findOne({ email: req.body.email })
      .select('+password')
      .then((user) => {
        if (!user) {
          return Promise.reject(ExceptionHandler.badRequestException(Error.USER_DOES_NOT_EXIST));
        } else {
          return user.comparePassword(req.body.password)
            .then((match) => {
              if (match) {
                const token = jwt.encode(user, config.jwtSecret);
                res.json({
                  message: 'Sign in successfully',
                  token: `JWT ${token}`,
                });
              } else {
                return Promise.reject(ExceptionHandler.badRequestException(Error.SIGN_IN_INVALID_CREDENTIALS));
              }
            });
        }
      })
      .catch((err) => {
        next(err);
      });
  }

  static me (req, res, next) {
    res.json(req.user);
  }

}

export default AuthController;
