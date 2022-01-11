import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDragAndDrop]'
})
export class DragAndDropDirective {

  private isClicked = false;

  //public style = {};

  @HostListener('mousedown', ['$event.target'])
  onMouseDown(btn) {
    this.isClicked = true;
  }

  @HostListener('mouseup', ['$event.target'])
  onMouseUp(btn) {
    this.isClicked = false;
  }

   @HostListener('document:mousemove', ['$event'])
  onMouseMove(event) {
    if(!this.isClicked){
      return;
    }

    this.el.nativeElement.style.left = `${event.clientX}px`;
    this.el.nativeElement.style.top = `${event.clientY}px`;

    //this.el.nativeElement.style = {left: `${event.clientX}px`, top: `${event.clientY}px`}
  }

  constructor(private el: ElementRef) { 
  }

}
