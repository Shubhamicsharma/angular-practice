import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonServiceService } from '../Services/common-service.service';
import { DataTableComponent } from './data-table/data-table.component';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule, FormsModule, DataTableComponent],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  constructor(private userDataObj:CommonServiceService){}
  userData = {
    0 : "",
    1 : "",
    2 : "",
    3 : "",
    4 : "",
    5 : ""
  }

  setUserData(){
    this.userDataObj.setUserData(this.userData);

    var a: any[] = [];

    const storedData = localStorage.getItem('userData');

    a = storedData ? JSON.parse(storedData) : [];

    a.push(this.userData);

    localStorage.setItem('userData', JSON.stringify(a));
  }

  // countries = ["India", "Australia", "England", "America"]


  // headers = ["Student Name", "Maths", "English", "Science"]


  // marks = [
  //   {
  //     0: "Student1",
  //     1 : 95,
  //     2 : 90,
  //     3 : 85
  //   },
  //   {
  //     0: "Student2",
  //     1 : 95,
  //     2 : 90,
  //     3 : 95
  //   },
  //   {
  //     0: "Student3",
  //     1 : 95,
  //     2 : 90,
  //     3 : 95
  //   },{
  //     0: "Student4",
  //     1 : 95,
  //     2 : 90,
  //     3 : 95
  //   }
  // ]
}
