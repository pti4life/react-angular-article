import { Component, HostBinding, input } from '@angular/core';

/** Quite good button component for our library */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[app-library-button]',
  standalone: true,
  template: `
    <ng-content></ng-content>
    <div class="lets_say_this_class_gives_us_ripple_effect"></div>
  `,
})
export class LibraryButtonComponent {
  variant = input<'outlined'>();

  @HostBinding('class.btn--outlined') get variantStyle() {
    return this.variant() === 'outlined' ? 'btn--outlined' : undefined;
  }
}
