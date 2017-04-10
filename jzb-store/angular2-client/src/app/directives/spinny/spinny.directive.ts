import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { LoggerService } from "../../services/logger.service";

@Directive({ selector: '[spinny]',

})
export class SpinnyDirective {
  constructor(private el: ElementRef,
              private logger: LoggerService
  )
  {
    if(!this.el.nativeElement.classList.contains('spinny'))
    {
      this.el.nativeElement.classList.add('spinny');
    }
  }

  @Input() borderColor: string;
  @Input() borderWidth: number;
  @Input() scale: number;


  @HostListener('click') onClick() {
    this.logger.logInfo('click spinny');

    if(this.el.nativeElement.classList.contains('boxSpinny')){
      this.el.nativeElement.classList.remove('boxSpinny');
      this.el.nativeElement.classList.add('circleSpinny');

      //this.el.nativeElement.classList= 'spinny circleSpinny';
    }
    else {
      this.el.nativeElement.classList.remove('circleSpinny');
      this.el.nativeElement.classList.add('boxSpinny');

      //this.el.nativeElement.classList= 'spinny boxSpinny';
    }
  }
}
