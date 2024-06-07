import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Question } from './question.schema';
import { Model } from 'mongoose';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<Question>,
  ) {}

  create(createQuestionDto: CreateQuestionDto) {
    return this.questionModel.create(createQuestionDto);
  }

  findAll() {
    return this.questionModel.find();
  }

  findOne(id: string) {
    return this.questionModel.findById(id);
  }

  update(id: string, updateQuestionDto: UpdateQuestionDto) {
    return this.questionModel.findByIdAndDelete(id, updateQuestionDto);
  }

  remove(id: string) {
    return this.questionModel.findByIdAndDelete(id);
  }
}
