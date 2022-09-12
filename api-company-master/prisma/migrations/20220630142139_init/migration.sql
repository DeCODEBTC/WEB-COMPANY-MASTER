-- AlterTable
ALTER TABLE "User" ADD COLUMN     "companyId" INTEGER;

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "minimum_value" TEXT NOT NULL,
    "delivery" BOOLEAN DEFAULT true,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "enabled" BOOLEAN DEFAULT true,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
