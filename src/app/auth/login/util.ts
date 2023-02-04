import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidation(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;

  if (!value) {
    return null;
  }

  if (!/.{6,}@gmail\.(bg|com)/.test(value)) {
    return {
      email: true,
    };
  }
  return null;
}
