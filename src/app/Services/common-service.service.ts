import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  userData$ = new BehaviorSubject({
    0 : "",
    1 : "",
    2 : "",
    3 : "",
    4 : "",
    5 : ""
  })

  setUserData(userData:any){
    this.userData$.next(userData);
  }


















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
