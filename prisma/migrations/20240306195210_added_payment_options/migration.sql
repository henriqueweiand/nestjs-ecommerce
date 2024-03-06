/*
  Warnings:

  - You are about to drop the column `userId` on the `order` table. All the data in the column will be lost.
  - Added the required column `user` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('paid', 'open', 'canceled');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('stripe', 'paddle', 'paypal', 'other');

-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_userId_fkey";

-- AlterTable
ALTER TABLE "order" DROP COLUMN "userId",
ADD COLUMN     "paymentId" TEXT,
ADD COLUMN     "paymentMethod" "PaymentMethod",
ADD COLUMN     "status" "OrderStatus" NOT NULL DEFAULT 'open',
ADD COLUMN     "user" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_user_fkey" FOREIGN KEY ("user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
