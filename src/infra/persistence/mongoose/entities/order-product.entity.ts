import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderProductDocument = HydratedDocument<OrderProduct>;

@Schema()
export class OrderProduct {
  @Prop({ type: String, ref: 'Product' })
  productId: string;

  @Prop({ type: String, ref: 'Order' })
  orderId: string;

  @Prop()
  price: number;
}

export const OrderProductSchema = SchemaFactory.createForClass(OrderProduct);
