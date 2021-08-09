import { Component } from "@angular/core";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/markdown/markdown";

@Component({
  selector: "url-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "url-compiler";
}
