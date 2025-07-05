/*
  Warnings:

  - Added the required column `image` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Made the column `title` on table `Blog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `content` on table `Blog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `slug` on table `Blog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Course` required. This step will fail if there are existing NULL values in that column.
  - Made the column `content` on table `Lesson` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "image" TEXT NOT NULL,
ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "content" SET NOT NULL,
ALTER COLUMN "slug" SET NOT NULL;

-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "Lesson" ALTER COLUMN "content" SET NOT NULL;
