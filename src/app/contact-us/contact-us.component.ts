import { Component } from '@angular/core';
import { ContactUsChildComponent } from './contact-us-child/contact-us-child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ContactUsChildComponent, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  addressDetails ={
    address :'',
    contact : ''
  }
}
