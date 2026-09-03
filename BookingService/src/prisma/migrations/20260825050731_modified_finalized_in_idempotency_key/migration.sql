/*
  Warnings:

  - You are about to drop the column `finalize` on the `idempotencykey` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `idempotencykey` DROP COLUMN `finalize`,
    ADD COLUMN `finalized` BOOLEAN NOT NULL DEFAULT false;
