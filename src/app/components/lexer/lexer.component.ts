import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit,
  ViewChild,
  ChangeDetectorRef,
  ViewContainerRef,
  Renderer2,
} from "@angular/core";
import { tokenizer } from "../../helpers";
import { TimelineLite, Back, Power1, SlowMo, TweenLite, TweenMax } from "gsap";

@Component({
  selector: "url-lexer",
  templateUrl: "./lexer.component.html",
  styleUrls: ["./lexer.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class LexerComponent implements OnInit, AfterViewInit {
  @Input() url: string;
  tokens: any;
  tokenArray = [];
  scannerPos = 0;
  scannedTokens = [];
  @ViewChild("lexer", { static: false }) lexerElem: ElementRef;
  @ViewChildren("tokenElem") tokenElems: QueryList<ElementRef>;

  constructor(private vcRef: ViewContainerRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.url) {
      this.tokens = tokenizer(this.url);
    }
  }

  scan() {
    const tokens: any = document.querySelectorAll(".tokenText");
    const scanner: any = document.querySelector(".scanner");
    const tl = new TimelineLite();

    tokens.forEach((token) => {
      const rect = token.getBoundingClientRect();
      const length = token.innerText.trim();
      tl.fromTo(
        scanner,
        0.1,
        { left: this.scannerPos, opacity: 1 },
        { left: this.scannerPos + rect.width }
      );

      this.scannerPos += rect.width;
      const cln = token.cloneNode(true);
      cln.classList.add("clone");
      tl.to(cln, 1, { opacity: 1 });
      this.renderer.appendChild(this.lexerElem.nativeElement, cln);
    });
    tl.to(scanner, 0.1, { opacity: 0 });
  }

  getLeftPostion(node, previous) {
    return 0;
  }

  tween(): void {
    const btnArr: Element[] = this.tokenArray.map((btn) => btn.nativeElement);
    console.log(btnArr);

    const coord = this.lexerElem.nativeElement.getBoundingClientRect();
    let x = 0;
    TweenMax.staggerFromTo(
      btnArr,
      1,
      {
        x: coord.x,
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        x: (index, target) => {
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
    this.tween();
    this.scan();
  }
}
