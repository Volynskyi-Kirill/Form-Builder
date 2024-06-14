import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { QUESTION_TYPE } from 'src/shared/enums';

export class CreateQuestionDto {
  @IsEnum(QUESTION_TYPE)
  @IsNotEmpty()
  type: QUESTION_TYPE;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsOptional()
  size: string;
}
