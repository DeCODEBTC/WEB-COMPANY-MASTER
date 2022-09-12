/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL;

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "tableVisible" BOOLEAN DEFAULT false,
    "deliveyVisible" BOOLEAN DEFAULT false,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "moreEight" BOOLEAN DEFAULT false,
    "tableVisible" BOOLEAN DEFAULT false,
    "deliveyVisible" BOOLEAN DEFAULT false,
    "price" DOUBLE PRECISION NOT NULL,
    "menuId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Optional" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "tableVisible" BOOLEAN DEFAULT false,
    "deliveyVisible" BOOLEAN DEFAULT false,
    "min" INTEGER DEFAULT 0,
    "max" INTEGER DEFAULT 1,

    CONSTRAINT "Optional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_OptionalToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_OptionalToProduct_AB_unique" ON "_OptionalToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_OptionalToProduct_B_index" ON "_OptionalToProduct"("B");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OptionalToProduct" ADD CONSTRAINT "_OptionalToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Optional"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OptionalToProduct" ADD CONSTRAINT "_OptionalToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
