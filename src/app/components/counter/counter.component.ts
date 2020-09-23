import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnChanges {
  @Input() counterParent: number;
  @Output() counterHistoryEvent = new EventEmitter<number>();
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.counterHistoryEvent.emit(changes.counterParent.previousValue);
    console.log(changes.counterParent.previousValue);
  }

  ngOnInit(): void {}

}
