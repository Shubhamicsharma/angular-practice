import { Component,Input } from '@angular/core';
import {CommonServiceService} from '../../Services/common-service.service';
@Component({
  selector: 'app-contact-us-child',
  standalone: true,
  imports: [],
  templateUrl: './contact-us-child.component.html',
  styleUrl: './contact-us-child.component.css'
})
export class ContactUsChildComponent {
  constructor(private css:CommonServiceService ) {}
  // @Input() add = '';
  // @Input() cont = '';
  @Input() parentData = {
    address : '',
    contact : ''
  }

  onGetData(){
    this.css.data$.subscribe(res =>{
      alert(res);
    })
  }
}
