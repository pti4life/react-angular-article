import { Component, input } from '@angular/core';

/** A button component that hides its button instead of extending it - anti-pattern❗ */
@Component({
  selector: 'app-first-button',
  standalone: true,
  template: `
    <button [type]="type()" [disabled]="disabled()">
      <ng-content></ng-content>
      <div class="lets_say_this_class_gives_us_ripple_effect"></div>
    </button>
  `,
})
export class FirstButtonComponent {
  type = input('button');
  disabled = input(false);
}
