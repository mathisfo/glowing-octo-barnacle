import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { refuelRouter } from "./refuelRouter";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  refuelEntries: refuelRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
