-- CreateTable
CREATE TABLE "urls" (
    "id" SERIAL NOT NULL,
    "url_original" TEXT NOT NULL,
    "short" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "urls_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "urls_url_original_key" ON "urls"("url_original");

-- CreateIndex
CREATE UNIQUE INDEX "urls_short_key" ON "urls"("short");
