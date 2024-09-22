import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HomeChildComponent } from './home-child/home-child.component';
import { Router, RouterLink, NavigationExtras } from '@angular/router';
import { query } from '@angular/animations';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [FormsModule, HomeChildComponent, RouterLink],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor (private routerObj:Router){}
	// Current Address Variables
	currentFlatNo = ""
	currentBuilding = ''
	currentLandmark = ""
	currentCity = ""
	currentPincode = ""
	currentState = ""

	// Variable required to send data to child
	currentAddressSender = {
    flatNo : "",
    building : "",
    landmark : "",
    city : "",
    pincode : "",
    state : ""
	}

	// Function to send data to child on box check
	onSameAsCurrent(event:any){
		if(event.target.checked){
			this.currentAddressSender = {
				flatNo : this.currentFlatNo,
				building : this.currentBuilding,
				landmark : this.currentLandmark,
				city : this.currentCity,
				pincode : this.currentPincode,
				state : this.currentState
			}
		}
	}

	// Functionality To Receive Data from Child
	onSameAsPermanent(event:any){
		this.currentFlatNo = event.flatNo;
		this.currentBuilding = event.building;
		this.currentLandmark = event.landmark;
		this.currentCity = event.city;
		this.currentPincode = event.pincode;
		this.currentState = event.state;
	}


  firstName = '';
  lastName = '';
  email = '';
  address = '';

  navigateToContact(){
     const dataObj : NavigationExtras = {
      queryParams: {
            'firstName' : this.firstName,
            "lastName" : this.lastName,
            "email" : this.email,
            "address" : this.address,
      }
     }
    this.routerObj.navigate(['/contact'], dataObj)
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
