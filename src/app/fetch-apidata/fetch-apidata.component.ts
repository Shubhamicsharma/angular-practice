import { Component } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { first } from 'rxjs';
import { CommonModule } from '@angular/common';

import './../constants';
import { customValidator } from '../../validators/custom-validator';

// interface UserData {
//     id: number;
//     first_name : String;
//     last_name : String;
//     email  :String;
//     contact: String;
//     address : String;
//     company : String;
//     designation : String;
// }

// interface CountryData {
//     country : String
// }

@Component({
    selector: 'app-fetch-apidata',
    standalone: true,
    imports: [FormsModule, CommonModule, ReactiveFormsModule],
    templateUrl: './fetch-apidata.component.html',
    styleUrl: './fetch-apidata.component.css',
})
export class FetchAPIDataComponent {
    myForm: FormGroup;

    constructor(private httpService: HttpService) {
        this.myForm = new FormGroup({
            myInput: new FormControl('', [
                Validators.required,
                customValidator(),
            ]),
        });
    }
    firstName = '';
    getData() {
        this.httpService.getLoginData().subscribe((x) => {
            console.log(x);
        });
    }

    userData: UserData[] = [];

    countriesData: CountryData[] = [];

    btnColor = 'blue';

    getUserData() {
        this.httpService.getUserData().subscribe((res: any) => {
            // this.firstName = res['first_name'];
            this.userData = res;
            console.log(res);
        });
    }

    getCountries() {
        this.httpService.getCountriesData().subscribe((res: any) => {
            this.countriesData = res;
        });
    }
}
