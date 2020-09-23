import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBgStyle]'
})
export class BgStyleDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.color = 'green';
  }

}
