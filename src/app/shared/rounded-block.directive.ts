import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appRoundedBlock]'
})
export class RoundedBlockDirective {

  constructor(
    private elementRef: ElementRef) {
      if (elementRef.nativeElement.tagName === 'P') {
        elementRef.nativeElement.style.backgroundColor = 'yellow';
        elementRef.nativeElement.style.padding = '10px';
        elementRef.nativeElement.style.borderRadius = '10px';
      }
    }

}
