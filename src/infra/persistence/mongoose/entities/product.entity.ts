import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { OrderProduct } from './order-product.entity'

export type OrderDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  title: string;

  @Prop()
  price: number;

  @Prop({ type: String, ref: 'OrderProduct' })
  OrderProduct: OrderProduct[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
