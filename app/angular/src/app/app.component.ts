import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { FirstButtonComponent } from '../buttons/first-button.component';
import { LibraryButtonComponent } from '../buttons/library-button.component';
import { LoadingButtonDirective } from '../loading-button.directive';

@Component({
  standalone: true,
  imports: [
    FirstButtonComponent,
    LibraryButtonComponent,
    LoadingButtonDirective,
  ],
  selector: 'app-root',
  template: `
    <div class="container">
      <!-- Usage of our first button (anti-pattern) -->
      <app-first-button>First button</app-first-button>

      <!--✅ We have an extended button, in this case we can pass all properties the button without hiding the native html button -->
      <button #btnRef app-library-button>Library button</button>

      <!-- We would use this way but it doesn't work❌ (https://angular.dev/errors/NG0300) -->
      <!--<button #btnRef app-library-button [loading]="true">
        Library button
      </button> -->

      <!-- We have a loader button that has a quite good api -->
      <button #btnRef app-library-button [loading]="btnLoading()">
        Library button
      </button>
    </div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  /* ❌ We can't have direct reference to the button because it is fully hidden */
  firstBtn = viewChild(FirstButtonComponent);

  /* ✅ In case of the library button we can have direct reference to the button */
  btnRef = viewChild('btnRef', {
    read: ElementRef<HTMLButtonElement>,
  });

  btnLoading = signal(false);
}
