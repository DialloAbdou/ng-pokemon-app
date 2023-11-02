import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[pkmnBorderCard]",
})
export class BorderCardDirective {
  private initialColor: string = "#f5f5f5";
  private defaultColor: string = "#009688";
  private defaultheight: number = 180;
  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setheight(this.defaultheight);
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
  private setheight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  @Input("pkmnBorderCard") BorderColer: string;
  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.BorderColer || this.defaultColor);
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder(this.initialColor);
  }
}
