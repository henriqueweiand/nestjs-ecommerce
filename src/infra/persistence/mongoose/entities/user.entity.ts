import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Order } from './order.entity'

export type UserDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop({ type: [{ type: String, ref: 'Order' }] })
  orders: Order[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
