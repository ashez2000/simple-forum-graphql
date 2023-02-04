import jwt from 'jsonwebtoken';
import config from '../../../config';
import db from '../../../db/prisma';

type UserCredential = {
  email: string;
  password: string;
};

type UserCreateData = {
  name: string;
} & UserCredential;

const signToken = (payload: any) => jwt.sign(payload, config.jwtSecret);

// TODO: Input validation
// TODO: Password hashing
// TODO: Proper response and error handling
export const AuthMutation = {
  signup: async (parent: any, args: UserCreateData, ctx: any, info: any) => {
    const user = await db.user.create({ data: args });
    const token = signToken({ id: user.id });
    return token;
  },

  signin: async (parent: any, args: UserCredential, ctx: any, info: any) => {
    const { email } = args;
    const user = await db.user.findUnique({ where: { email } });
    if (!user) return 'Invalid Credentials';
    if (user.password !== args.password) return 'Invalid Credentials';
    const token = signToken({ id: user.id });
    return token;
  },
};
