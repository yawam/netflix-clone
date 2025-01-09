import { PrismaClient } from "@prisma/client";

// Extend the globalThis namespace
declare global {
  namespace globalThis {
    let prismadb: PrismaClient | undefined;
  }
}
