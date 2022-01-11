import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirectiveExample]'
})
export class DirectiveExample1Directive {
  @Input() fgColor = '';
  @Input() appDirectiveExample = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appDirectiveExample || 'yellow', this.fgColor || '');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('', '');
  }
  
  private highlight(bg: string, fg: string) {
    this.el.nativeElement.style.backgroundColor = bg;
    this.el.nativeElement.style.color = fg;
  }
  constructor(private el: ElementRef) { 
  }

}
