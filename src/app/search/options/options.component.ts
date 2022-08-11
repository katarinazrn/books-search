import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  OPTIONS = ['Title', 'Author', 'Subject', 'Place', 'Person', 'Publisher'];
  selectedOption = 'Title';

  @Output() setOption: any;

  constructor() {
    this.setOption = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  onChange() {
    this.setOption.emit(this.selectedOption);
  }

}
