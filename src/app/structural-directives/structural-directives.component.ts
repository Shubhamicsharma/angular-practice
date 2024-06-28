import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
declare var bootstrap: any;

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent implements OnInit {
  // Login Credentials Variable
  loginUsername = '';
  loginPassword = '';

  // Login View Toggler
  loginViewer = true;

  // Register Credentials
  registerUsername = '';
  registerPassword = '';

  // Register View Toggler
  registerViewer = false;

  // Content View Toggler
  contentViewer = false;

  // Warnings Toggler
  invalidCredentials = false
  invalidRegisterCredentials = false
  alreadyRegistered = false

  // Content Locked Toggler
  isLocked = true;

  // Toggle between Register and login view
  onRegisterNow(){
    this.registerViewer = true;
    this.loginViewer = false;
  }

  onLoginHere(){
    this.loginViewer = true;
    this.registerViewer = false;
  }

  // Users Dummy Database
  users = [
    {
      username: "shubhamsharma@gmail.com",
      password: "shubham123",
      isSubscribed : true
    },
    {
      username: "user1@gmail.com",
      password : 'user123',
      isSubscribed : false
    }
  ]

  // Object to store current user details
  currentUser = {
    username : '',
    password : '',
    isSubscribed : false
  }

  // Function to check user details in the db
  authenticateUser(username: string, password: string) {
    return this.users.find(user => user.username === username && user.password === password);
  }

  // Login Button Functionality
  onLogin(){
    const user = this.authenticateUser(this.loginUsername, this.loginPassword);
    if(user) {
      // User Found
      this.currentUser = user;
      this.loginViewer = false;
      this.contentViewer = true;

      // Remove Invalid credentials warning
      this.invalidCredentials = false

      if(user.isSubscribed){
        this.subscribeBtnText = 'Unsubscribe'
      }
    }else{
      // User Not Found
      this.invalidCredentials = true
    }
  }

  onRegister(){
    // Clear all Warnings
    this.alreadyRegistered = false;
    this.invalidRegisterCredentials = false

    // Check if user entered valid credentials
    if(this.registerUsername && this.registerPassword){
      // Check if user already exists
      const user = this.users.find(user => user.username === this.registerUsername);
      if(user) {
        this.alreadyRegistered = true
      }else {
        // User does not exist, add new user to db
        this.users.push({
          username: this.registerUsername,
          password: this.registerPassword,
          isSubscribed: false
        });
        // Switch to login view
        this.registerViewer = false;
        this.loginViewer = true

        // Make Register fields empty
        this.registerUsername = ''
        this.registerPassword = ""
      }
    }else {
      this.invalidRegisterCredentials = true
    }
  }

  // Functionality to store credentials in local storage
  onRememberMe(event:any){
    if(event.target.checked){
      localStorage.setItem('username', this.loginUsername)
      localStorage.setItem('password', this.loginPassword)
    }else {
      localStorage.removeItem('username')
      localStorage.removeItem("password")
    }
  }

  subscribeBtnText = 'Subscribe'


  // Track which content Watch Now button was clicked
  selectedContentIndex: number | null = null;

  // Function to handle "Watch Now" button click
  watchNow(index: number): void {
    this.selectedContentIndex = index;
    if (this.currentUser.isSubscribed) {
      this.isLocked = false;
      this.movieNumber = index+1;
      const modalElement = document.getElementById('watchModal');
      const modal = new bootstrap.Modal(modalElement!);
      modal.show();
    }
  }

  // Functionality to subscribe or unsubscribe
  onSubscribe(){
    if(this.currentUser.isSubscribed){

      if(confirm('Are you sure you want to unsubscribe')){
        this.currentUser.isSubscribed = false
        this.subscribeBtnText = 'Subscribe'
        this.isLocked = true;
        this.selectedContentIndex = -1
      }
    }else{

      if(confirm('Are you sure you want to subscribe by paying 9.99$/month')){
        this.currentUser.isSubscribed = true
        this.subscribeBtnText = "Unsubscribe"
        this.isLocked = false
      }

    }
  }

  // Functionality to logout
  onLogout(){
    if(confirm("Are you sure you want to Logout")){
      this.contentViewer = false
      this.loginViewer = true;
      this.currentUser = {
        username: '',
        password: "",
        isSubscribed: false
      }
    }
  }
  ngOnInit(): void {
      this.loginUsername = localStorage.getItem('username') || '';
      this.loginPassword = localStorage.getItem('password') || '';
  }

  movieNumber = 0;





  // hideButton = true;
  // showButton = false;

  // hideContent(){
    //   this.hideButton = false;
    //   this.subscribedContent = false;
    //   this.showButton = true
  // }

  // showContent(){
    //   this.hideButton = true;
    //   this.subscribedContent = true
    //   this.showButton = false
    // }

//     subscribedContent = false;
//     subscribeButton = true;
//     unsubscribeButton = false

//     onSubscribe(){
//       this.subscribedContent = true
//       this.unsubscribeButton = true
//       this.subscribeButton = false
//     }

//     onUnsubscribe(){
//       this.subscribedContent = false
//       this.subscribeButton = true
//       this.unsubscribeButton = false
//     }
}
