import { Component } from '@angular/core';
import { ContactUsChildComponent } from './contact-us-child/contact-us-child.component';
import {CommonServiceService} from '../Services/common-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ContactUsChildComponent, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  constructor(private obj:CommonServiceService){}
  addressDetails ={
    address :'',
    contact : ''
  };
  sharedata = '';

  onSendData(){
    this.obj.setData(this.sharedata);
  }
}
