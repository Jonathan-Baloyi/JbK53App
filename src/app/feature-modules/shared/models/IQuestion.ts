import { IAnswer } from './IAnswer';

export interface IQuestion {
  id: number;
  type: string;
  description: string;
  imageUrl: string;
  answers: IAnswer[];
  correctAnswers: IAnswer[];
  showCorrectAnswer: boolean;
}
