import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { OrderProduct } from './order-product.entity'

export type OrderOrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop({ type: String, ref: 'User' })
  userId: string;

  @Prop({ type: String, ref: 'Order' })
  OrderProduct: OrderProduct[];

  @Prop()
  total: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
