module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8a4b414cb988872c0c1d8b04fe22bf85'),
  },
});
