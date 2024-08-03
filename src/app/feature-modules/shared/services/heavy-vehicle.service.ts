import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IQuestion } from '../models/IQuestion';

@Injectable({
  providedIn: 'root',
})
export class LearnersTestService {
  questions: IQuestion[] = [];

  constructor(private httpService: HttpClient) {}

  public getQuestions(): Observable<IQuestion[]> {
    return this.httpService.get(
      'assets/questions/questions.json'
    ) as Observable<IQuestion[]>;
  }
}
