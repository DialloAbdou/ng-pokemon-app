import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[pkmnBorderCard]",
})
export class BorderCardDirective {
  constructor(private el: ElementRef) {
    this.setBorder("#f5f5f5");
    this.setheight(180);
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
  private setheight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder("#009688");
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder("#f5f5f5");
  }
}
