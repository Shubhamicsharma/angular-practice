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

  getDataNew(){
    this.obj.commonDataReciever.subscribe(res => {
      alert(res)
    })
  }

}
