import { Directive, ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ref:ElementRef) { }

  @HostListener('mouseenter') onmouseEnter(){
this.ref.nativeElement.style.padding='1rem'
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.ref.nativeElement.style.padding='.3rem'
  }
}
