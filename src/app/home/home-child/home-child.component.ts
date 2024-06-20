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
  // Permanent Address Variables



  // Functionality To Receive Data From Parent
  @Input() sameAsCurrentFlatNo = ""
  @Input() sameAsCurrentBuilding = ""
  @Input() sameAsCurrentLandmark = ""
  @Input() sameAsCurrentCity = ""
  @Input() sameAsCurrentPincode = ""
  @Input() sameAsCurrentState = ""

  @Output() permanentAddressData = new EventEmitter();

  // Functionality To Send Data To Parent
  onSameAsPermanent(event:any){
    if(event.target.checked){
      this.onEmitData();
    }
  }

  // Function to emit data on Same as permanent address box check
  onEmitData(){
    const permanentAddressObject = {
      flatNo : this.sameAsCurrentFlatNo,
      building: this.sameAsCurrentBuilding,
      landmark : this.sameAsCurrentLandmark,
      city : this.sameAsCurrentCity,
      pincode : this.sameAsCurrentPincode,
      state : this.sameAsCurrentState
    }
    this.permanentAddressData.emit(permanentAddressObject);

  }


}
