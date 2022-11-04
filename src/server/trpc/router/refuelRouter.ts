import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const refuelRouter = router({
  submit: publicProcedure
    .input(
      z.object({
        aircraft: z.string(),
        pumpValue: z.preprocess(
          (a) => parseInt(z.string().parse(a), 10),
          z.number().positive().max(100000)
        ),
        name: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const refuelEntry = await ctx.prisma.refuelEntry.create({
        data: {
          aircraft: input.aircraft,
          pumpValue: input.pumpValue,
          name: input.name,
        },
      });

      return refuelEntry;
    }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.refuelEntry.findMany();
  }),
  getLastPumpValue: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.refuelEntry.findFirst({
      select: {
        pumpValue: true,
      },
    });
  }),
});
