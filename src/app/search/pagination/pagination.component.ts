import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  first: any = null;
  prev: any = null;
  next: any = null;
  last: any = null;

  @Input() numberOfPages: number = 0;
  @Input() current: number = 1;

  @Output() updateCurrent: EventEmitter<any>;

  constructor() {
    this.updateCurrent = new EventEmitter<any>();
  }

  ngOnInit(): void {
    this.update();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.update();
  }

  setCurrentPage(num: number) {
    this.current = num;
    this.update();
    this.updateCurrent.emit(this.current);
  }

  update() {
    this.first = 1;
    this.prev = this.current - 1;
    this.next = this.current + 1;
    this.last = this.numberOfPages;

    if (this.first == this.current || this.first == this.prev) this.first = null;
    if (this.prev == this.current || this.prev < 1) this.prev = null;
    if (this.next == this.current || this.next > this.numberOfPages) this.next = null;
    if (this.last == this.current || this.last == this.next) this.last = null;

  }

}
