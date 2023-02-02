import { Thread } from '@prisma/client';
import db from '../../db/prisma';

type ThreadCreateDto = {
  content: string;
};

type ThreadPayload = {
  errors: string[];
  thread: Thread | null;
};

export const Mutation = {
  threadCreate: async (
    parent: any,
    args: ThreadCreateDto,
    ctx: any,
    info: any
  ): Promise<ThreadPayload> => {
    const { content } = args;
    if (content.length === 0) {
      return { errors: ['Content cannot be empty'], thread: null };
    }

    const thread = await db.thread.create({ data: { content } });
    return { errors: [], thread };
  },
};
