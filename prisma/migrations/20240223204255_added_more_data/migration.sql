/*
  Warnings:

  - You are about to drop the column `order_id` on the `order_product` table. All the data in the column will be lost.
  - Added the required column `orderId` to the `order_product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "order_product" DROP CONSTRAINT "order_product_order_id_fkey";

-- AlterTable
ALTER TABLE "order_product" DROP COLUMN "order_id",
ADD COLUMN     "orderId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "order_product" ADD CONSTRAINT "order_product_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
