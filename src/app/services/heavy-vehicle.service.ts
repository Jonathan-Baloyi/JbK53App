import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IQuestion } from '../models/IQuestion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeavyVehicleService {

  questions: IQuestion[] = [];

  constructor(private httpService: HttpClient) { }

  public getQuestions(): Observable<IQuestion[]> {
    return this.httpService.get('../../../../assets/questions/questions.json') as Observable<IQuestion[]>;
  }
}
