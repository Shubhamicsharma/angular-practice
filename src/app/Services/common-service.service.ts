import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  data$ = new BehaviorSubject('');

  setDataValue(data: string){
    this.data$.next(data)
  }

  // constructor() { }
}
