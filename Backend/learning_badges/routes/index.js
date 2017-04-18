import express from 'express';

// Import the module routes
import UserRoutes from './user';

const router = express.Router();

// Default get route
router.get('/', (req, res) => res.end('Welcome to LearningBadges.'));

/* TODO add below the api routes */
router.use('/users', UserRoutes);

// Error handling
router.use((err, req, res, next) => {
  /*
   * Remove Error's `stack` property. We don't want
   * users to see this at the production env
   */
  if (req.app.get('env') === 'development') {
    console.log(err); // eslint-disable-line no-console
  }

  /* Finally respond to the request using our wrapper */
  if (err.status) {
    res.status(err.status || 500).jsonp(err);
  } else {
    res.status(500).jsonp({message: 'Something went wrong!'});
  }

  next();
});

export default router;
