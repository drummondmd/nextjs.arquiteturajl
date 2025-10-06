/*
  Warnings:

  - The values [cancelado] on the enum `statusBudget` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `expectedBudget` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `initialBudget` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `ProjectDetail` table. All the data in the column will be lost.
  - Added the required column `userType` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tokenType` to the `UserToken` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "userType" AS ENUM ('admin', 'arquiteto', 'cliente');

-- CreateEnum
CREATE TYPE "tokenType" AS ENUM ('reset_password', 'email_confirmation');

-- AlterEnum
BEGIN;
CREATE TYPE "statusBudget_new" AS ENUM ('enviado', 'aceito', 'rejeitado');
ALTER TABLE "public"."Budget" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Budget" ALTER COLUMN "status" TYPE "statusBudget_new" USING ("status"::text::"statusBudget_new");
ALTER TYPE "statusBudget" RENAME TO "statusBudget_old";
ALTER TYPE "statusBudget_new" RENAME TO "statusBudget";
DROP TYPE "public"."statusBudget_old";
ALTER TABLE "Budget" ALTER COLUMN "status" SET DEFAULT 'enviado';
COMMIT;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "expectedBudget",
DROP COLUMN "initialBudget",
ALTER COLUMN "developmentType" SET DEFAULT 'interiores';

-- AlterTable
ALTER TABLE "ProjectDetail" DROP COLUMN "type";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userType",
ADD COLUMN     "userType" "userType" NOT NULL;

-- AlterTable
ALTER TABLE "UserToken" DROP COLUMN "tokenType",
ADD COLUMN     "tokenType" "tokenType" NOT NULL;
