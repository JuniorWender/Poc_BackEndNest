-- CreateTable
CREATE TABLE "JsonForm" (
    "id" TEXT NOT NULL,
    "jsonName" TEXT,
    "newValues" JSONB,
    "originalValues" JSONB,

    CONSTRAINT "JsonForm_pkey" PRIMARY KEY ("id")
);
