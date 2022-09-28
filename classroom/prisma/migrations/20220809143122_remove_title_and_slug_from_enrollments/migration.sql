/*
  Warnings:

  - You are about to drop the column `slug` on the `Enrollment` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Enrollment` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Enrollment_slug_key";

-- AlterTable
ALTER TABLE "Enrollment" DROP COLUMN "slug",
DROP COLUMN "title";
