import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { LoginChildComponent } from './login-child/login-child.component';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, LoginChildComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  formTitle = "Login Form"
  emailValue = "shubhamicsharma@gmail.com"
  password = ""
  childData = "";

  constructor(private routerObj : Router){}

  loginUsername = ''
  loginPassword = ''

  users = [
    {
      name : 'Shubham Sharma',
      username: "shubhamsharma@gmail.com",
      password: "shubham123",
      isSubscribed : true
    },
    {
      name : "User",
      username: "user1@gmail.com",
      password : 'user123',
      isSubscribed : false
    }
  ]

  authenticateUser(username: string, password: string) {
    return this.users.find(user => user.username === username && user.password === password);
  }

  onLogin(){
    if(this.loginUsername == '' || this.loginPassword == ''){
      if(this.loginUsername == '' && this.loginPassword == ''){
        alert('Please Enter Username and Password First')
      }else if(this.loginUsername == '') alert('Please Enter Your Username First')
      else alert('Please Enter Your Password First')
    }else {
      const user = this.authenticateUser(this.loginUsername, this.loginPassword);

      if(user) {
        this.routerObj.navigate(['home'])
      }else {
        alert('Invalid Credentials')
      }


    }
  }

  onNavigate(){
    this.routerObj.navigate(['home']);
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

  onRecieveData(event:any){
    console.log(event)
    this.childData = event;
  }

}
