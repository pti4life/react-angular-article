import { NgStyle } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [NgStyle],
  template: `<div [ngStyle]="spinnerStyle()"></div>`,
  styles: `
    
  `,
})
export class SpinnerComponent {
  size = input(24);
  color = input('black');

  spinnerStyle = computed(() => ({
    width: `${this.size()}px`,
    height: `${this.size()}px`,
    border: `4px solid ${this.color()}`,
    borderTop: `4px solid transparent`,
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  }));
}
