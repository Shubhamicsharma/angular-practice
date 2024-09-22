import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function customValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;

        // Custom validation logic
        if (value && value.length < 5) {
            // If the condition is not met, return an error object
            return { customError: 'Value must be at least 5 characters long' };
        }

        // Return null if validation passes
        return null;
    };
}
