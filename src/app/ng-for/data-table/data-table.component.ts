import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../Services/common-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent implements OnInit {
  constructor(private userDataObj:CommonServiceService) { }

  tableHeaders = ["First Name", "Last Name", "Phone Number", "Email", "Address", "Dob"];

    userData = [{}]


  getUserData(){
    this.userDataObj.userData$.subscribe(res => {
        if(res[0] || res[1] || res[2] || res[3] || res[4] || res[5]){
          this.userData.push(res)
        }
    })
  }

  onClear(){
    localStorage.clear();
    this.userData = [{}]
  }

  ngOnInit(): void {
    const storedData = localStorage.getItem('userData');
    this.userData = storedData ? JSON.parse(storedData) : [{}];
  }
}
