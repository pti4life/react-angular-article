import {
  booleanAttribute,
  ComponentRef,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { SpinnerComponent } from './spinner.component';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'button[loading]',
  standalone: true,
})
export class LoadingButtonDirective {
  viewContainerRef = inject(ViewContainerRef);
  renderer = inject(Renderer2);
  btnRef = inject(ElementRef) as ElementRef<HTMLButtonElement>;

  private spinner!: ComponentRef<SpinnerComponent> | null;

  loading = input(false, { transform: booleanAttribute });
  disabled = input(false, { transform: booleanAttribute });

  constructor() {
    const btnInitialFontSize = this.btnRef.nativeElement.style.fontSize;
    effect(() => {
      if (this.loading()) {
        this.btnRef.nativeElement.style.fontSize = '0';
        this.btnRef.nativeElement.disabled = true;
        this.createSpinner();
      } else {
        this.btnRef.nativeElement.style.fontSize = btnInitialFontSize;
        this.btnRef.nativeElement.disabled = this.disabled();
        this.destroySpinner();
      }
    });
  }

  private createSpinner(): void {
    if (!this.spinner) {
      this.spinner = this.viewContainerRef.createComponent(SpinnerComponent);
      this.renderer.appendChild(
        this.btnRef.nativeElement,
        this.spinner.location.nativeElement
      );
    }
  }

  private destroySpinner(): void {
    if (this.spinner) {
      this.spinner.destroy();
      this.spinner = null;
    }
  }
}
