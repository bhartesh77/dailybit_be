-- CreateTable
CREATE TABLE "Starter" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Starter_pkey" PRIMARY KEY ("id")
);
