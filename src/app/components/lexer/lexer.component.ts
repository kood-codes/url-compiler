import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
} from "@angular/core";
import { TimelineLite, TweenMax } from "gsap";
import { tokenizer } from "../../helpers";

@Component({
  selector: "url-lexer",
  templateUrl: "./lexer.component.html",
  styleUrls: ["./lexer.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class LexerComponent implements OnInit, AfterViewInit {
  @Input() url!: string;
  tokens: any;
  tokenArray = [];
  scannerPos = 0;
  verticalPos = 0;
  scannedTokens = [];
  @ViewChild("lexer", { static: false }) lexerElem!: ElementRef<any>;
  @ViewChildren("tokenElem") tokenElems!: QueryList<ElementRef>;

  constructor(private vcRef: ViewContainerRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.url) {
      this.tokens = tokenizer(this.url);
    }
  }

  scan() {
    const tokens = document.querySelectorAll(".tokenText");
    const scanner = <HTMLElement>document.querySelector(".scanner");
    const container = <HTMLElement>document.querySelector(".parent");
    const containerRect = container?.getBoundingClientRect();
    const tl = new TimelineLite();

    tokens.forEach((token: Element) => {
      const rect = token.getBoundingClientRect();
      const currentVertPos = rect.y - containerRect.y;
      if (currentVertPos > this.verticalPos) {
        this.scannerPos = 0;
      }

      tl.fromTo(
        scanner,
        0.1,
        { left: this.scannerPos, opacity: 1, top: currentVertPos },
        { left: this.scannerPos + rect.width, top: currentVertPos }
      );

      this.scannerPos += rect.width;
      this.verticalPos = currentVertPos;
      const cln = <Element>token.cloneNode(true);
      cln.classList.add("clone");
      tl.to(cln, 1, { opacity: 1 });
      this.renderer.appendChild(this.lexerElem.nativeElement, cln);
    });
    tl.to(scanner, 0.1, { opacity: 0 });
  }

  tween(): void {
    const btnArr: Element[] = this.tokenArray.map(
      (btn: ElementRef<any>) => btn.nativeElement
    );

    const coord = this.lexerElem.nativeElement.getBoundingClientRect();
    let x = coord.x;
    let y = coord.y;
    TweenMax.staggerFromTo(
      btnArr,
      1,
      {
        x,
        y,
        opacity: 0,
      },
      {
        y: (index: number, target: any) => {
          const currentY = y;
          y += target.getBoundingClientRect().height;
          return target.getBoundingClientRect().height;
        },
        x: (index: number, target: any) => {
          const currentX = x;
          x += target.getBoundingClientRect().width + 10;
          return currentX;
        },
        opacity: 1,
      },
      0.2
    );
  }

  ngAfterViewInit() {
    // this.tokenArray = this.tokenElems.toArray();
    // this.tween();
    this.scan();
  }
}
