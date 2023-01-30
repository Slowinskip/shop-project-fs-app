export default () => ({
  port: parseInt(process.env.PORT, 10) || 5000,
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '12h',
  },
});
