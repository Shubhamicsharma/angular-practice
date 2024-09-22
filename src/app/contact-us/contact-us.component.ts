import { Component } from '@angular/core';
import { ContactUsChildComponent } from './contact-us-child/contact-us-child.component';
import { CommonServiceService } from '../Services/common-service.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ContactUsChildComponent, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  constructor(private obj:CommonServiceService, private ac:ActivatedRoute){}
  receiveData ={
    firstName :'',
    lastName : '',
    email : '',
    address : ''
  };
  // shareData = '';

  // onSendData(){
  //   this.obj.setData(this.shareData);
  // }

  onFetch(){
    this.ac.queryParams.subscribe(res =>{
      this.receiveData.firstName = res['firstName'];
      this.receiveData.lastName = res['lastName'];
      this.receiveData.email = res['email'];
      this.receiveData.address = res['address'];
    })
  }
}
