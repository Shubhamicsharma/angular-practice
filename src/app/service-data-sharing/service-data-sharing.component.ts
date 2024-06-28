import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildServiceDataSharingComponent } from './child-service-data-sharing/child-service-data-sharing.component';
import { CommonServiceService } from '../Services/common-service.service';

@Component({
  selector: 'app-service-data-sharing',
  standalone: true,
  imports: [ChildServiceDataSharingComponent, FormsModule],
  templateUrl: './service-data-sharing.component.html',
  styleUrl: './service-data-sharing.component.css'
})
export class ServiceDataSharingComponent {
  constructor(private css:CommonServiceService){}

  dataObject = {
    data : '',
    dollarData : ''
  }

  data = ""
  dollarData = ''

  onSend(){
    this.css.setDataNew(this.data);
    this.css.setDollarData(this.dollarData);
  }

  onSendObj(){
    this.css.setObjectData(this.dataObject)
    console.log(this.dataObject)
  }
}
