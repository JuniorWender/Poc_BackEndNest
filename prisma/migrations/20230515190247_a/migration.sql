/*
  Warnings:

  - The primary key for the `JsonForm` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Id` on the `JsonForm` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "JsonForm" DROP CONSTRAINT "JsonForm_pkey",
DROP COLUMN "Id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "JsonForm_pkey" PRIMARY KEY ("id");