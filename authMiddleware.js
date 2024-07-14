// authMiddleware.js

// Middleware for ensuring authentication
const ensureAuthenticated = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  res.redirect('/login');
};

// Middleware for checking user roles
const ensureRole = (role) => {
  return (req, res, next) => {
    if (req.session.user && req.session.user.role === role) {
      return next();
    }
    res.status(403).send('Forbidden');
  };
};

module.exports = { ensureAuthenticated, ensureRole };
