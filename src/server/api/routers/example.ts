import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    console.log('trying to get secret message')
    return "you can now see this secret message!";
  }),

  avaliability: protectedProcedure.query(({ ctx }) => {
    console.log('ctx.session.user');
    console.log(ctx.session.user);
    return "you can now see this secret message!";
  }),
});
