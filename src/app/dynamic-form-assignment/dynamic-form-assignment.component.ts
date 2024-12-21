import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { InputTextComponent } from '../../shared/components/input-text/input-text.component';
import { InputNumberComponent } from '../../shared/components/input-number/input-number.component';
import { InputCheckboxComponent } from '../../shared/components/input-checkbox/input-checkbox.component';
import { TextareaComponent } from '../../shared/components/textarea/textarea.component';

@Component({
  selector: 'app-dynamic-form-assignment',
  standalone: true,
  imports: [FormsModule, CommonModule, InputTextComponent, InputNumberComponent, InputCheckboxComponent, TextareaComponent],
  templateUrl: './dynamic-form-assignment.component.html',
  styleUrl: './dynamic-form-assignment.component.css'
})
export class DynamicFormAssignmentComponent {

    formFields = [
        {label: 'First Name', type: 'text'},
        {label: 'Last Name', type: 'text'},
        {label: 'Email', type: 'text'},
        {label: 'Phone', type: 'number'},
        {label: 'Placed In a Company', type: 'checkbox'},
        {label: 'Placed In a Company', type: 'checkbox'},
        {label: 'Placed In a Company', type: 'checkbox'},
        {label: 'Placed In a Company', type: 'checkbox'},
        {label: 'Comments', type: 'textarea'}
    ]

//   formTitle = "Assignment - 17/06/2024"

//   // Labels Variables
//   firstNameLabel = "First Name"
//   middleNameLabel = "Middle Name"
//   lastNameLabel = "Last Name"
//   companyNameLabel = "Company Name"
//   contactNumLabel = "Contact Number"
//   dobLabel = "Date of Birth"
//   ageLabel = "Age"
//   designationLabel = "Designation"
//   genderLabel = "Gender"
//   addressLabel = "Address"

//   // Sub Address Variables
//   flatNumLabel = "Flat/House No."
//   buildingLabel = "Building Name"
//   areaLabel = "Area"
//   landmarkLabel = "Landmark"
//   cityLabel = "City"
//   pincodeLabel = "Pincode"
//   stateLabel = "State"

//   // Buttons Name Variable

//   submitButtonName = "Submit"
//   saveButtonName = "Save"
//   cancelButtonName = "Cancel"

//   //value Variables
//   firstName = "Shubham"
//   middleName = ""
//   lastName = "Sharma"
//   companyName = "Coding Kingdom"
//   contactNum = "9876543210"
//   dob = ""
//   age = "24"
//   designation = "Software Developer"
//   gender = "Male"

//   flatNo = "37/338/63/2"
//   buildingName = ""
//   areaName = "Dayalbagh"
//   landmark = "Landmark"
//   city = "Agra"
//   pincode = "282005"
//   stateName = "Uttar Pradesh"

//   onCancel(){
//     // Clear all the form fields
//     this.firstName = ""
//     this.middleName = ""
//     this.lastName = ""
//     this.companyName = ""
//     this.contactNum = ""
//     this.dob = "mm/dd/yyyy"
//     this.age = ""
//     this.designation = ""
//     this.gender = ""

//     this.flatNo = ""
//     this.buildingName = ""
//     this.areaName = ""
//     this.landmark = ""
//     this.city = ""
//     this.pincode = ""
//     this.stateName = ""
//   }

//   onSave(){
//     if((this.firstName) && (this.middleName) && (this.lastName) && (this.companyName) && (this.contactNum) && (this.dob) && (this.age) && (this.designation) && (this.gender) && (this.flatNo) && (this.buildingName) && (this.areaName) && (this.landmark) && (this.city) && (this.pincode) && (this.stateName)){

//       alert(`Hi my Name is ${this.firstName} ${this.middleName} ${this.lastName}. My date of birth is ${this.dob} and I am ${this.age} years old. I am currently working as a ${this.designation} in ${this.companyName}. My contact number is ${this.contactNum}. I am a ${this.gender}. My address is ${this.flatNo}, ${this.buildingName}, ${this.areaName}, ${this.landmark}, ${this.city} - ${this.pincode}, ${this.stateName}`)
//     }else {
//       alert("Please fill all the fields first")
//     }
//   }

//   onSubmit(){
//     alert("Form Submitted Successfully")
//   }

}
