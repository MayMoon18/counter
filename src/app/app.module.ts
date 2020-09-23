import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { BgStyleDirective } from './shared/directives/bg-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    BgStyleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
