module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5ea793ef6b8e1540e4918c5dc876e950'),
  },
});
