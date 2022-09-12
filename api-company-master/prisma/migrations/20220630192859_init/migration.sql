/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "cookingStyle" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "fullAddress" TEXT,
ADD COLUMN     "linkDelivery" TEXT,
ADD COLUMN     "quantRequest" INTEGER,
ADD COLUMN     "typePlan" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "permissionsToCompany" INTEGER;
