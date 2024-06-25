import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  data$ = new BehaviorSubject('');

  setData(serviceData:any){
    this.data$.next(serviceData);
  }

  commonDataReciever = new BehaviorSubject('');

  setDataNew(serviceData:any){
    this.commonDataReciever.next(serviceData);
  }

}
