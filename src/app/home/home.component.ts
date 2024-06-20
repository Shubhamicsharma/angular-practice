import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HomeChildComponent } from './home-child/home-child.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, HomeChildComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Current Address Variables
  currentFlatNo = ""
  currentBuilding = ''
  currentLandmark = ""
  currentCity = ""
  currentPincode = ""
  currentState = ""

  // Variables required to send data to child
  toSendCurrentFlatNo = ""
  toSendCurrentBuilding = ''
  toSendCurrentLandmark = ""
  toSendCurrentCity = ""
  toSendCurrentPincode = ""
  toSendCurrentState = ""

  // Function to send data to child on box check
  onSameAsCurrent(event:any){
    if(event.target.checked){
      this.toSendCurrentFlatNo = this.currentFlatNo,
      this.toSendCurrentBuilding = this.currentBuilding,
      this.toSendCurrentLandmark = this.currentLandmark,
      this.toSendCurrentCity = this.currentCity,
      this.toSendCurrentPincode = this.currentPincode,
      this.toSendCurrentState = this.currentState
    }
  }

  // Functionality To Recieve Data from Child
  onSameAsPermanent(event:any){
    this.currentFlatNo = event.flatNo;
    this.currentBuilding = event.building;
    this.currentLandmark = event.landmark;
    this.currentCity = event.city;
    this.currentPincode = event.pincode;
    this.currentState = event.state;
  }




  // firstName = "Shubham"
  // lastName = ""
  // email = ""
  // phone = ""
  // password = ""
  // confirmPassword = ""

  // onRegister() {
  //   alert(`First Name - ${this.firstName}, Last Name - ${this.lastName}, Email - ${this.email}, Password - ${this.password}, Confirm Password - ${this.confirmPassword}`)
  // }
}
