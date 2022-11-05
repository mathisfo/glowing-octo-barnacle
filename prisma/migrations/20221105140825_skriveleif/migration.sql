/*
  Warnings:

  - You are about to drop the column `amountRefield` on the `PumpRefuelEntry` table. All the data in the column will be lost.
  - Added the required column `amountRefilled` to the `PumpRefuelEntry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PumpRefuelEntry" DROP COLUMN "amountRefield",
ADD COLUMN     "amountRefilled" INTEGER NOT NULL;
