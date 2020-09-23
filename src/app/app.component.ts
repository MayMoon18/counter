import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  counter: number = 0;
  bookList: Array<string> = ['one', 'two', 'three', 'four', 'five'];
  isIncrementClicked: boolean;

  ngOnInit(): void {
    console.log('inicio');
  }

  increment() {
    this.counter++;
    this.isIncrementClicked = true;
  }

  decrement() {
    this.counter--;
  }
}
