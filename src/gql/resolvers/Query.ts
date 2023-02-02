import db from '../../db/prisma';

export const Query = {
  threads: async () => {
    const threads = await db.thread.findMany();
    return threads;
  },
};
