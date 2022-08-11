import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MyBooksService } from 'src/app/services/my-books.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit, OnChanges {

  @Input() key: string = '';
  @Input() flexColumn: boolean = false;
  @Output() update: EventEmitter<any>;

  wantToRead: boolean = false;
  reading: boolean = false;
  finished: boolean = false;

  constructor(private myBooksService: MyBooksService) {
    this.update = new EventEmitter<any>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.wantToRead = this.myBooksService.isWantToRead(this.key);
    this.reading = this.myBooksService.isReading(this.key);
    this.finished = this.myBooksService.isFinished(this.key);
  }

  ngOnInit(): void {
  }


  toggleWantToRead() {
    if (this.wantToRead) {
      this.myBooksService.removeFromWantToRead(this.key);
      this.wantToRead = false;
      this.update.emit({ key: this.key, action: 'removeFromWantToRead' });
    }
    else {
      this.myBooksService.addToWantToRead(this.key);
      this.wantToRead = true;
      this.update.emit({ key: this.key, action: 'addToWantToRead' });
    }
  }

  toggleReading() {
    if (this.reading) {
      this.myBooksService.removeFromReading(this.key);
      this.reading = false;
      this.update.emit({ key: this.key, action: "removeFromReading" });
    }
    else {
      this.myBooksService.addToReading(this.key);
      this.reading = true;
      this.update.emit({ key: this.key, action: 'addToReading' });
    }
  }

  toggleFinished() {
    if (this.finished) {
      this.myBooksService.removeFromFinished(this.key);
      this.finished = false;
      this.update.emit({ key: this.key, action: 'removeFromFinished' });
    }
    else {
      this.myBooksService.addToFinished(this.key);
      this.finished = true;
      this.update.emit({ key: this.key, action: 'addToFinished' });
    }
  }

}
