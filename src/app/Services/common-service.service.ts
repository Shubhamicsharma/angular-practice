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

  setDollarData(dollarData:any){
    this.data$.next(dollarData);

  }

  dataObject = new BehaviorSubject({
    data : '',
    dollarData : ''
  })

  setObjectData(obj : any){
    this.dataObject.next(obj)
  }
}
