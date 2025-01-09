import { PrismaClient } from "@prisma/client";

// Use `globalThis` to access the globally scoped `prismadb` variable
const client = globalThis.prismadb ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prismadb = client;
}

export default client;
