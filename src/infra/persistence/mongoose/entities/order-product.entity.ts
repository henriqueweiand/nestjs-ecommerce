import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Product } from './product.entity';

export type OrderProductDocument = HydratedDocument<OrderProduct>;

@Schema()
export class OrderProduct {
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Product.name })
  product: Product;

  @Prop()
  price: number;
}

export const OrderProductSchema = SchemaFactory.createForClass(OrderProduct);
