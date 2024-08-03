import { IAnswer } from './IAnswer';

export interface IQuestion {
  id: number;
  type: string; // Whether it's multiple choice question or not
  description: string;
  imageUrl: string;
  questionType: number[]; // Whether it's heavy vehicle question, light vehicle, or motor-cycle
  answers: IAnswer[];
  correctAnswers: IAnswer[];
  showCorrectAnswer: boolean;
}
