import { AfterViewInit, Component, Input } from "@angular/core";
import { TimelineMax } from "gsap";

@Component({
  selector: "url-generator",
  templateUrl: "./generator.component.html",
})
export class GeneratorComponent implements AfterViewInit {
  @Input() url!: string;
  constructor() {}

  ngAfterViewInit() {
    const tl = new TimelineMax({ repeat: 0 });
    const line = <Element>document.querySelector(".line");
    const upper = <Element>document.querySelector(".upper");
    const lower = <Element>document.querySelector(".lower");
    tl.from(line, 0.5, { scaleX: 0, transformOrigin: "right center" });
    tl.from(upper, 0.75, { y: 3 * upper.clientHeight }, "text");
    tl.from(lower, 0.75, { y: -3 * upper.clientHeight }, "text");
  }
}
