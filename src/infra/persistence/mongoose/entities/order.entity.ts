import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Type } from 'class-transformer';
import { OrderProduct } from './order-product.entity';
import { User } from './user.entity';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, })
  @Type(() => User)
  user: User;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: OrderProduct.name }],
  })
  orderProduct: OrderProduct[];

  @Prop()
  total: number;

  @Prop({ default: 'open' })
  status: 'paid' | 'open' | 'canceled';

  @Prop({ index: true })
  paymentId?: string;

  @Prop({ index: true })
  paymentMethod?: 'stripe' | 'paddle' | 'paypal' | 'other';
}

const OrderSchema = SchemaFactory.createForClass(Order);

export { OrderSchema };
