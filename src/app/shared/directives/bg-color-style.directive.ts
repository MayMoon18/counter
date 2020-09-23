import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBgColorStyle]'
})
export class BgColorStyleDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.color = 'white';
    element.nativeElement.style.background = 'red';
  }

}
