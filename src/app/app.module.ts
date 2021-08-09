import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { AppComponent } from './app.component';
import { CompilerComponent } from './containers/compiler/compiler.component';
import { LexerComponent } from './components/lexer/lexer.component';
import { ParserComponent } from './components/parser/parser.component';
import { FormsModule } from '@angular/forms';
import { TransformerComponent } from './components/transformer/transformer.component';
import { GeneratorComponent } from './components/generator/generator.component';

@NgModule({
  declarations: [
    AppComponent,
    CompilerComponent,
    LexerComponent,
    ParserComponent,
    TransformerComponent,
    GeneratorComponent
  ],
  imports: [
    BrowserModule,
    GoogleChartsModule,
    OrganizationChartModule,
    NoopAnimationsModule,
    CodemirrorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
