/*
  Warnings:

  - The `status` column on the `Budget` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `ConstructionPhase` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `ConstructionTask` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `ProjectPhase` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `ProjectPhaseTask` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "statusPhase" AS ENUM ('planejado', 'em_andamento', 'concluido', 'cancelado', 'atrasado');

-- CreateEnum
CREATE TYPE "statusBudget" AS ENUM ('enviado', 'aceito', 'rejeitado', 'cancelado');

-- AlterTable
ALTER TABLE "Budget" DROP COLUMN "status",
ADD COLUMN     "status" "statusBudget" DEFAULT 'enviado';

-- AlterTable
ALTER TABLE "ConstructionPhase" DROP COLUMN "status",
ADD COLUMN     "status" "statusPhase" NOT NULL DEFAULT 'planejado';

-- AlterTable
ALTER TABLE "ConstructionTask" DROP COLUMN "status",
ADD COLUMN     "status" "statusPhase" NOT NULL DEFAULT 'planejado';

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "status",
ADD COLUMN     "status" "statusPhase" NOT NULL DEFAULT 'planejado';

-- AlterTable
ALTER TABLE "ProjectPhase" DROP COLUMN "status",
ADD COLUMN     "status" "statusPhase" NOT NULL DEFAULT 'planejado';

-- AlterTable
ALTER TABLE "ProjectPhaseTask" DROP COLUMN "status",
ADD COLUMN     "status" "statusPhase" NOT NULL DEFAULT 'planejado';
