import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  countries = ["India", "Australia", "England", "America"]


  headers = ["Student Name", "Maths", "English", "Science"]


  marks = [
    {
      0: "Student1",
      1 : 95,
      2 : 90,
      3 : 85
    },
    {
      0: "Student2",
      1 : 95,
      2 : 90,
      3 : 95
    },
    {
      0: "Student3",
      1 : 95,
      2 : 90,
      3 : 95
    },{
      0: "Student4",
      1 : 95,
      2 : 90,
      3 : 95
    }
  ]
}
