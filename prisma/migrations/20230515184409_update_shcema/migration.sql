/*
  Warnings:

  - The primary key for the `JsonForm` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `JsonForm` table. All the data in the column will be lost.
  - You are about to drop the column `jsonName` on the `JsonForm` table. All the data in the column will be lost.
  - You are about to drop the column `newValues` on the `JsonForm` table. All the data in the column will be lost.
  - You are about to drop the column `originalValues` on the `JsonForm` table. All the data in the column will be lost.
  - Added the required column `JsonName` to the `JsonForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NewValues` to the `JsonForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `OriginalValues` to the `JsonForm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JsonForm" DROP CONSTRAINT "JsonForm_pkey",
DROP COLUMN "id",
DROP COLUMN "jsonName",
DROP COLUMN "newValues",
DROP COLUMN "originalValues",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD COLUMN     "JsonName" TEXT NOT NULL,
ADD COLUMN     "NewValues" JSONB NOT NULL,
ADD COLUMN     "OriginalValues" JSONB NOT NULL,
ADD CONSTRAINT "JsonForm_pkey" PRIMARY KEY ("Id");
