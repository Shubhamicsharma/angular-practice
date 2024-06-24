import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-contact-us-child',
  standalone: true,
  imports: [],
  templateUrl: './contact-us-child.component.html',
  styleUrl: './contact-us-child.component.css'
})
export class ContactUsChildComponent {
  // @Input() add = '';
  // @Input() cont = '';
  @Input() parentData = {
    address : '',
    contact : ''
  }
}
