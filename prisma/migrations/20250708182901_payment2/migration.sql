/*
  Warnings:

  - Made the column `description` on table `Payment` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `paymentType` on the `Payment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "paymentType" AS ENUM ('entrada', 'saida');

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "notificationSent" BOOLEAN DEFAULT false,
ALTER COLUMN "description" SET NOT NULL,
DROP COLUMN "paymentType",
ADD COLUMN     "paymentType" "paymentType" NOT NULL;
