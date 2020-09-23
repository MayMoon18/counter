import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  counter: number = 0;
  isIncrementClicked: boolean;
  counterHistory: Array<number> = [];

  ngOnInit(): void {
    console.log('inicio');
  }

  addHistory(value: number) {
    this.counterHistory.push(value);
  }

  increment() {
    this.counter++;
    this.isIncrementClicked = true;
  }

  decrement() {
    this.counter--;
  }
}
