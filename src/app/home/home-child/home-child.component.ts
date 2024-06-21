import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home-child.component.html',
  styleUrl: './home-child.component.css'
})
export class HomeChildComponent {
  // Variable of Input type for two way data binding and data receiving
  @Input() permanentAddress = {
    flatNo : "",
    building : "",
    landmark : "",
    city : "",
    pincode : "",
    state : ""
  }

  @Output() permanentAddressData = new EventEmitter();

  // Functionality To Send Data To Parent
  onSameAsPermanent(event:any){
    if(event.target.checked){
      this.onEmitData();
    }
  }

  // Function to emit data on Same as permanent address box check
  onEmitData(){
    const permanentAddressSender = this.permanentAddress;
    this.permanentAddressData.emit(permanentAddressSender);
  }
}
