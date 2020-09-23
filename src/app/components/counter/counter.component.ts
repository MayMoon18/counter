import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnChanges {
  @Input() counterParent: number;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  }

  ngOnInit(): void {}

}
