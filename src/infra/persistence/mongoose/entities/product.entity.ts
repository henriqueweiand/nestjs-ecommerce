import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { OrderProduct } from './order-product.entity';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  _id: mongoose.Schema.Types.ObjectId;

  @Prop()
  title: string;

  @Prop()
  price: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OrderProduct' }] })
  orderProduct: OrderProduct[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
