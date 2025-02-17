-- CreateTable
CREATE TABLE "Bin" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "shortId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bin_shortId_key" ON "Bin"("shortId");
