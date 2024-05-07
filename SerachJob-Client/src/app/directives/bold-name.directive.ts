import { Directive, ElementRef, HostListener, Input, OnInit, input } from '@angular/core';

@Directive({
  selector: '[appBoldName]'
})
export class BoldNameDirective implements OnInit {

  @Input() BoldName: string = 'gray'
  @Input() boldName: string = 'rgb(239,145,105)'

  constructor(private element: ElementRef) { }
  ngOnInit(): void {
  }



  @HostListener('mouseenter')
  mouseEnter() {
    this.element.nativeElement.style.color = this.BoldName;

  }




  @HostListener('mouseleave')
  mouseLeave() {
    this.element.nativeElement.style.color = this.boldName;
  }



}
