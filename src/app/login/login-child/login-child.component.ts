import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-child.component.html',
  styleUrl: './login-child.component.css'
})
export class LoginChildComponent {
@Input() parentFormTitle = "";
@Input() parentUsername = "";
@Input() parentPassword = "";

childData = ""

@Output() childDataObject = new EventEmitter();

onEmitData(){
  this.childDataObject.emit(this.childData);
}
}
