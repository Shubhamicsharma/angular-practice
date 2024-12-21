import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-input-checkbox',
    standalone: true,
    imports: [],
    templateUrl: './input-checkbox.component.html',
    styleUrl: './input-checkbox.component.css',
})
export class InputCheckboxComponent {
    @Input() labelName = '';
}
