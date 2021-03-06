import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
  ViewEncapsulation,
} from "@angular/core";
import { TimelineLite } from "gsap";
import { mapAstToChart } from "src/app/helpers";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "url-parser",
  templateUrl: "./parser.component.html",
})
export class ParserComponent implements OnInit, AfterViewInit {
  @Input() ast: any;
  @Input() label!: string;
  @ViewChildren("astNode") astNodes!: QueryList<ElementRef>;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.ast = [mapAstToChart(this.ast)];
  }

  ngAfterViewInit() {
    this.parse();
  }

  parse() {
    const nodes: any = document.querySelectorAll(".p-organizationchart-table");
    const tl = new TimelineLite();

    tl.staggerFromTo(
      nodes,
      1,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      0.4
    );
  }

  transform() {
    const astNodes = document.querySelectorAll(".ast-node");
    const tl = new TimelineLite();

    astNodes.forEach((astNode) => {
      tl.to(astNode, 0.1, {
        boxShadow: "0px 0px 16px 10px rgba(179,25,179,1)",
      }).to(astNode, 0.5, {
        boxShadow: "none",
      });
    });
    this.cdRef.detectChanges();
  }
}
