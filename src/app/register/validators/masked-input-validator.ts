import { AbstractControl } from '@angular/forms';

export function ValidateMaskedInput(placeholder: string) {
    return (control: AbstractControl) => {
        const value = control.value;

        if (value) {
            const expectedLength = value.length;
            const unmasked = value.replace(new RegExp(placeholder, 'g'), '')

            if (unmasked.length != expectedLength) {
                return { invalid: true };
            }
        }

        return null;
    }
}