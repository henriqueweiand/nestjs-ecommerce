import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Order } from './order.entity';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  _id: mongoose.Schema.Types.ObjectId;

  @Prop()
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }] })
  orders: Order[];
}

const UserSchema = SchemaFactory.createForClass(User);

export { UserSchema };
