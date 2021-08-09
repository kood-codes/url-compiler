import {
  Component,
  OnInit,
  Input,
  Output,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef,
  EventEmitter,
  ViewEncapsulation,
} from "@angular/core";
import { TimelineLite } from "gsap";
import { transformer, mapAstToChart } from "src/app/helpers";

@Component({
  selector: "url-transformer",
  templateUrl: "./transformer.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class TransformerComponent implements OnInit, AfterViewInit {
  @Input() ast: Array<any>;
  @Input() modifiedAst: Array<any>;
  @Input() visitor: any;

  @Output() transform = new EventEmitter();
  @ViewChildren("astNode") astNodes: QueryList<ElementRef>;
  show = false;

  ngOnInit() {
    this.ast = [mapAstToChart(this.ast)];
    this.modifiedAst = [mapAstToChart(this.modifiedAst)];
  }

  ngAfterViewInit() {
    this.transformAst();
  }

  transformAst() {
    const nodes: Element[] = this.astNodes.map((btn) => btn.nativeElement);
    const tl = new TimelineLite({
      onComplete: () => {
        this.show = true;
      },
    });

    nodes.forEach((astNode) => {
      tl.to(astNode, 0.1, {
        boxShadow: "0px 0px 5px 5px #EB9F86",
      }).to(astNode, 0.3, {
        boxShadow: "none",
      });
    });
  }
}
