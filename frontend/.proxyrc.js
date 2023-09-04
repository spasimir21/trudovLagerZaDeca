// This file puts middleware between the Parcel development server and the browser/app
// It disables the browser's cache for hot-reload purposes (Only applies to development environments)

module.exports = app => {
  app.use((_, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });
};
