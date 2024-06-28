import { Component } from '@angular/core';
import { CommonServiceService } from '../../Services/common-service.service';

@Component({
  selector: 'app-child-service-data-sharing',
  standalone: true,
  imports: [],
  templateUrl: './child-service-data-sharing.component.html',
  styleUrl: './child-service-data-sharing.component.css'
})
export class ChildServiceDataSharingComponent {
  constructor(private obj:CommonServiceService){}

  dataReciever = ""
  dollarData = ""

  objReciever = {
    data : '',
    dollarData : ''
  }

  getDataNew(){
    this.obj.commonDataReciever.subscribe(res => {
      this.dataReciever = res
    })

    this.obj.data$.subscribe(res => {
      this.dollarData = res;
    })

  }

  getDataObj(){
    this.obj.dataObject.subscribe(res => {
      this.objReciever = res
    })
  }

}
