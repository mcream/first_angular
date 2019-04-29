import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/_esm5';

@Injectable()

export class DataService {

  private goals = new BehaviorSubject<any>(['Kolejny cel', 'kolejny durny cel']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }

}
