import { Router } from 'express';
import RatingController from '../controllers/ratings';
import passport from 'passport';

const ratingRouters = Router();

ratingRouters.post(
  '/post/:id/rating',
  (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (!user) {
        return res.status(401).json({
          message: 'Please provide a token to perform this action'
        });
      }
      next();
    })(req, res, next);
  },
  RatingController.create
);

export default ratingRouters;