import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  formTitle = "Login Form"
  emailValue = "shubhamicsharma@gmail.com"
  password = ""
  onLogin(){

  }

  onRememberMe(event:any){
    // console.log(event.target.checked)

    if(event.target.checked){
      localStorage.setItem('username', this.emailValue);
      localStorage.setItem('password', this.password);
    }else {
      // localStorage.removeItem("username");
      // localStorage.removeItem('password');

      localStorage.clear();
    }
  }

  ngOnInit(): void {
      this.emailValue = localStorage.getItem('username') || "";
      this.password = localStorage.getItem("password") || "";
  }
}
