import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent implements OnInit {
    dummyFormFields = [
        {'label':  'First Name', 'type': 'text'},
        {'label':  'Last Name', 'type': 'text'},
        {'label':  'Email', 'type': 'email'},
        {'label':  'Phone', 'type': 'tel'},
        {'label':  'Company Name', 'type': 'text'},
        {'label': 'Placed in a company', 'type': 'checkbox'},
        {'label': 'Placed in a company', 'type': 'checkbox'},
        {'label': 'Placed in a company', 'type': 'checkbox'},
        {'label': 'Placed in a company', 'type': 'checkbox'},
        {'label':  'Address', 'type': 'textarea'},

    ]

    filterFormFields(allFields: any[], requiredType: string) {
        if(requiredType === 'all'){
            return allFields.filter(field => field.type !== 'checkbox' && field.type !== 'textarea');
        }else {
            return allFields.filter(field => field.type === requiredType);
        }
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        let allFieldsContainer = document.querySelector('.all');
        let checkboxContainer = document.querySelector('.checkbox')
        let textareaContainer = document.querySelector('.textarea');

        for (const field of this.dummyFormFields) {
            if(field['type'] == 'checkbox'){
                let container = document.createElement('div');
                container.classList.add('w-25', 'px-5', 'py-2');

                let label = document.createElement('label');
                label.innerHTML = field.label;

                let input = document.createElement('input')
                input.type = field.type;
                input.classList.add('me-3')

                container.appendChild(input);
                container.appendChild(label),

                checkboxContainer?.appendChild(container)
            }else if(field['type'] == 'textarea'){
                let container = document.createElement('div');
                container.classList.add('w-100', 'px-5', 'py-2');

                let label = document.createElement('label');
                label.innerHTML = field.label;

                let input = document.createElement('textarea')
                // input.type = field.type;
                input.classList.add('me-3', 'w-100')

                container.appendChild(label),
                container.appendChild(input);

                textareaContainer?.appendChild(container)
            }else {
                let container = document.createElement('div');
                container.classList.add('w-50', 'px-5', 'py-2');

                let label = document.createElement('label');
                label.innerHTML = field.label;

                let input = document.createElement('input')
                input.type = field.type;
                input.classList.add('w-100')

                container.appendChild(label),
                container.appendChild(input);

                allFieldsContainer?.appendChild(container)
            }
        }
    }
}
