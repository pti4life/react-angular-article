import {
  booleanAttribute,
  Component,
  effect,
  ElementRef,
  inject,
  input,
} from '@angular/core';
import { SpinnerComponent } from './spinner.component';

// This is the implementation of the LoadingButtonComponent
// but each component selector must be unique, so we cannot use this one simultaneously
// with the "app-library-button" component.
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[loading]',
  standalone: true,
  template: `@if (loading()) {
    <app-spinner />
    } @else {
    <ng-content></ng-content>
    }`,
  imports: [SpinnerComponent],
})
export class LoadingButtonComponent {
  loading = input(false, { transform: booleanAttribute });
  disabled = input(false, { transform: booleanAttribute });
  btn = inject(ElementRef);

  constructor() {
    effect(
      () =>
        (this.btn.nativeElement.disabled = this.loading() || this.disabled())
    );
  }
}
