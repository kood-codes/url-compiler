import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
  ViewEncapsulation,
} from "@angular/core";
import { TimelineLite } from "gsap";
import { mapAstToChart } from "src/app/helpers";

@Component({
  selector: "url-transformer",
  templateUrl: "./transformer.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class TransformerComponent implements OnInit, AfterViewInit {
  @Input() ast!: any;
  @Input() modifiedAst!: any;
  @Input() visitor: any;

  @Output() transform = new EventEmitter();
  @ViewChildren("astNode") astNodes!: QueryList<ElementRef>;
  showModified = false;

  ngOnInit() {
    this.ast = [mapAstToChart(this.ast)];
    this.modifiedAst = [mapAstToChart(this.modifiedAst)];
  }

  ngAfterViewInit() {
    this.transformAst();
  }

  transformAst() {
    const nodes: Element[] = this.astNodes?.map((btn) => btn.nativeElement);
    const tl = new TimelineLite({
      onComplete: () => {
        this.showModified = true;
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
