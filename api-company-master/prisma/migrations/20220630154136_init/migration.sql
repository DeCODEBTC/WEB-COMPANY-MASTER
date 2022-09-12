/*
  Warnings:

  - You are about to drop the column `menuId` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_menuId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "menuId";

-- CreateTable
CREATE TABLE "_MenuToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MenuToProduct_AB_unique" ON "_MenuToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_MenuToProduct_B_index" ON "_MenuToProduct"("B");

-- AddForeignKey
ALTER TABLE "_MenuToProduct" ADD CONSTRAINT "_MenuToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Menu"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MenuToProduct" ADD CONSTRAINT "_MenuToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
