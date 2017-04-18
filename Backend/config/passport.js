import passport from 'passport';
import passportJwt from 'passport-jwt';
import { User } from '../learning_badges/user';
import * as Error from '../learning_badges/exceptions/constants';
import ExceptionHandler from '../learning_badges/exceptions/handler';
import config from './env';

export function JwtStrategy (passport) {
  const opts = {
    secretOrKey: config.jwtSecret,
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeader(),
  };

  passport.use(new passportJwt.Strategy(opts, function (jwtPayload, done, info) {
    User.findOne({_id: jwtPayload._id})
      .then((user) => {
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
      .catch((err) =>
        done(err)
      );
  }));
}

export function JwtAuthentication (req, res, next) {
  passport.authenticate('jwt', { session: false }, function (err, user, info) {
    if (err) {
      return next(err);
    }

    if (user) {
      req.user = user;
      next();
    } else {
      next(ExceptionHandler.unauthorizedException(Error.UNAUTHORIZED_EXCEPTION));
    }
  })(req, res, next);
}
