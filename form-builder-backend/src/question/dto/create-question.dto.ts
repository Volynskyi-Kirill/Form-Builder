import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { QUESTION_TYPE } from 'src/shared/enums';

export class CreateQuestionDto {
  @IsEnum(QUESTION_TYPE)
  @IsNotEmpty()
  type: QUESTION_TYPE;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  text: string;

  @IsNumber()
  @IsOptional()
  size: number;
}
