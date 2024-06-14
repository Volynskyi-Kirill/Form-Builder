import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { QUESTION_TYPE } from 'src/shared/enums';

export type QuestionDocument = HydratedDocument<Question>;

@Schema()
export class Question {
  @Prop({ enum: QUESTION_TYPE, required: true })
  type: QUESTION_TYPE;

  @Prop({ required: true })
  title: string;

  @Prop()
  text: string;

  @Prop()
  size: number;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
