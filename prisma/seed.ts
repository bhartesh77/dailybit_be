// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.starter.create({
    data: {
      name: 'Hello World Table',
    },
  });
}

main().then(() => prisma.$disconnect());
