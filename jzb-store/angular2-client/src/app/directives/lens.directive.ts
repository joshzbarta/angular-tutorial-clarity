import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { LoggerService } from "../services/logger.service";

@Directive({ selector: '[myLens]' })
export class LensDirective {
  constructor(private el: ElementRef,
              private logger: LoggerService
  )
  {
    this.el.nativeElement.style.display = 'inline-block';
    //this.highlight(this.borderColor, this.borderWidth, this.scale);
  }

  @Input() borderColor: string;
  @Input() borderWidth: number;
  @Input() scale: number;

  @HostListener('mouseenter') onMouseEnter() {
    this.logger.logInfo('mouseenter lens');
    this.highlight(this.borderColor, this.borderWidth, this.scale);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.logger.logInfo('mouseleave lens');
    this.deHighlight();
  }

  @HostListener('click') onClick() {
    this.logger.logInfo('click lens');
    this.el.nativeElement.classList.add('redredred');
    this.logger.logInfo( JSON.stringify(this.el.nativeElement.classList));
  }

  private deHighlight(){
    this.highlight(null, 0, 1);
    this.el.nativeElement.style.borderRadius = null;
    this.el.nativeElement.style.textAlign = null;
    this.el.nativeElement.style.padding = null;


  }

  private highlight(color: string, borderWidth: number, scale: number) {
    if(!scale){
      scale=1;
    }

    this.el.nativeElement.style.borderColor = color;
    this.el.nativeElement.style.borderWidth = (borderWidth?borderWidth:0)+'px';
    this.el.nativeElement.style.borderStyle ='solid';
    this.el.nativeElement.style.borderRadius = '50%';
    this.el.nativeElement.style.textAlign = 'center';
    this.el.nativeElement.style.transform = ('scale('+(scale?scale:1)+')');

      this.el.nativeElement.style.padding = '5px';

  }
}
