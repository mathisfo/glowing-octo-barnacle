import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const registerRouter = router({
  submit: publicProcedure
    .input(
      z.object({
        aircraft: z.string(),
        pumpValue: z.number(),
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
});
