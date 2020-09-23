import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { BgStyleDirective } from './shared/directives/bg-style.directive';
import { BgColorStyleDirective } from './shared/directives/bg-color-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    BgStyleDirective,
    BgColorStyleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
