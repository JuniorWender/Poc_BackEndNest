/*
  Warnings:

  - The primary key for the `JsonForm` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `JsonForm` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `jsonName` on table `JsonForm` required. This step will fail if there are existing NULL values in that column.
  - Made the column `newValues` on table `JsonForm` required. This step will fail if there are existing NULL values in that column.
  - Made the column `originalValues` on table `JsonForm` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "JsonForm" DROP CONSTRAINT "JsonForm_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "jsonName" SET NOT NULL,
ALTER COLUMN "newValues" SET NOT NULL,
ALTER COLUMN "originalValues" SET NOT NULL,
ADD CONSTRAINT "JsonForm_pkey" PRIMARY KEY ("id");
