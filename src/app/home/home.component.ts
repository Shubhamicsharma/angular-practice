import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  firstName = "Shubham"
  lastName = ""
  email = ""
  phone = ""
  password = ""
  confirmPassword = ""

  onRegister() {
    alert(`First Name - ${this.firstName}, Last Name - ${this.lastName}, Email - ${this.email}, Password - ${this.password}, Confirm Password - ${this.confirmPassword}`)
  }
}
