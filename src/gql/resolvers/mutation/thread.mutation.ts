import db from '../../../db/prisma';
import { Thread } from '@prisma/client';

export type ThreadCreateData = {
  content: string;
};

export type ThreadPayload = {
  errors: string[];
  thread: Thread | null;
};

export const ThreadMutation = {
  threadCreate: async (
    parent: any,
    args: ThreadCreateData,
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

  threadDelete: async (parent: any, args: any, ctx: any, info: any) => {
    const thread = await db.thread.delete({ where: { id: parseInt(args.id) } });
    return { thread, error: [] };
  },

  signup: async (parent: any, args: any, ctx: any, info: any) => {
    const thread = await db.thread.delete({ where: { id: parseInt(args.id) } });
    return { thread, error: [] };
  },
};
