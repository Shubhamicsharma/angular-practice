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

    userStatus = 'Active';
  // Login Credentials Variable
  loginUsername = '';
  loginPassword = '';

  // Login View Toggler
  loginViewer = true;

  // Register Credentials
  registerName = '';
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
  isLocked : boolean | null = null;

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

  // Object to store current user details
  currentUser = {
    name : '',
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

      // this.isLocked = !user.isSubscribed;
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
          name : this.registerName,
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
  selectedContentIndex: number = 0;

  // Function to handle "Watch Now" button click
  watchNow(index: number): void {
    console.log("Index: " + index)
    this.selectedContentIndex = index;

    if (this.currentUser.isSubscribed) {
      this.isLocked = false;
      // this.movieNumber = index+1;
      const modalElement = document.getElementById('watchModal');
      const modal = new bootstrap.Modal(modalElement!);
      modal.show();
    }else {
      this.isLocked = true
    }
  }

  // Functionality to subscribe or unsubscribe
  onSubscribe(){
    if(this.currentUser.isSubscribed){

      if(confirm('Are you sure you want to unsubscribe')){
        this.currentUser.isSubscribed = false
        this.subscribeBtnText = 'Subscribe'
        this.isLocked = null;
        this.selectedContentIndex = 0
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
        name : '',
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

  // movieNumber = 0;

  movieList = [
    {
      idx : 0,
      coverImgLink : "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      movieTitle : "Movie 1",
      movieLink : '../../assets/Operation Valentine (Hindi) 2024.mp4'
    },
    {
      idx : 1,
      coverImgLink : "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      movieTitle : "Movie 2",
      movieLink : '../../assets/Operation Valentine (Hindi) 2024.mp4'
    },
    {
      idx : 2,
      coverImgLink : "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      movieTitle : "Movie 3",
      movieLink : '../../assets/Operation Valentine (Hindi) 2024.mp4'
    },
    {
      idx : 3,
      coverImgLink : "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      movieTitle : "Movie 4",
      movieLink : '../../assets/Operation Valentine (Hindi) 2024.mp4'
    },
    {
      idx : 4,
      coverImgLink : "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      movieTitle : "Movie 5",
      movieLink : '../../assets/Operation Valentine (Hindi) 2024.mp4'
    },
    {
      idx : 5,
      coverImgLink : "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      movieTitle : "Movie 6",
      movieLink : '../../assets/Operation Valentine (Hindi) 2024.mp4'
    },
    {
      idx : 6,
      coverImgLink : "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      movieTitle : "Movie 7",
      movieLink : '../../assets/Operation Valentine (Hindi) 2024.mp4'
    },
    {
      idx : 7,
      coverImgLink : "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      movieTitle : "Movie 8",
      movieLink : '../../assets/Operation Valentine (Hindi) 2024.mp4'
    },
    {
      idx : 8,
      coverImgLink : "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      movieTitle : "Movie 9",
      movieLink : '../../assets/Operation Valentine (Hindi) 2024.mp4'
    },
    {
      idx : 9,
      coverImgLink : "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      movieTitle : "Movie 10",
      movieLink : '../../assets/Operation Valentine (Hindi) 2024.mp4'
    },
    {
      idx : 10,
      coverImgLink : "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      movieTitle : "Movie 11",
      movieLink : '../../assets/Operation Valentine (Hindi) 2024.mp4'
    },
    {
      idx : 11,
      coverImgLink : "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      movieTitle : "Movie 12",
      movieLink : '../../assets/Operation Valentine (Hindi) 2024.mp4'
    },
    {
      idx : 12,
      coverImgLink : "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      movieTitle : "Movie 13",
      movieLink : '../../assets/Operation Valentine (Hindi) 2024.mp4'
    },
    {
      idx : 13,
      coverImgLink : "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      movieTitle : "Movie 14",
      movieLink : '../../assets/Operation Valentine (Hindi) 2024.mp4'
    },
    {
      idx : 14,
      coverImgLink : "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      movieTitle : "Movie 15",
      movieLink : '../../assets/Operation Valentine (Hindi) 2024.mp4'
    }
  ]



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
