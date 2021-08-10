import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Ast, AstNode } from "src/app/models";
import { generator, parser, tokenizer, transformer } from "../../helpers";

export enum CompilerState {
  IDLE = "IDLE",
  TOKENIZE = "TOKENIZE",
  PARSE = "PARSE",
  TRANSFORM = "TRANSFORM",
  GENERATE = "GENERATE",
  RESET = "RESET",
}

@Component({
  selector: "url-compiler",
  templateUrl: "./compiler.component.html",
})
export class CompilerComponent implements OnInit {
  url = "https://video.google.in:80/videoplay?lang=en#00h02m30s";
  CompilerState = CompilerState;
  currentState$ = new BehaviorSubject(CompilerState.IDLE);
  tokens!: AstNode[];
  startCompile = false;
  ast!: Ast;
  modifiedAst!: Ast;
  visitorObj: any;
  finalUrl!: string;
  visitor = `{
  QueryParamater(node) {
    if ((node.body.name === "lang") && (node.body.value === "en")) {
      node.body.value = "NL";
      node.body.modified = true;
    }
    return node;
  }
}`;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.compileUrl();
  }

  onTransform(modifiedAst: any) {
    this.ast = modifiedAst;
  }

  compileUrl() {
    this.tokens = tokenizer(this.url);
    this.ast = parser(this.tokens);
    // tslint:disable-next-line:prefer-const
    let visitorObj;
    // tslint:disable-next-line:no-eval
    eval(`visitorObj = ${this.visitor}`); // Using eval on purpose
    this.visitorObj = visitorObj;
    this.modifiedAst = JSON.parse(JSON.stringify(this.ast));
    this.modifiedAst = transformer(this.modifiedAst, this.visitorObj);
    this.finalUrl = generator(this.modifiedAst);
  }

  setState(state: CompilerState) {
    this.currentState$.next(CompilerState.RESET);
    this.cdRef.detectChanges();
    this.compileUrl();
    this.currentState$.next(state);
  }
}
