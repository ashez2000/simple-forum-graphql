import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT as any as number,
  jwtSecret: process.env.JWT_SECRET,
};
