import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();

  someProperty: any = 'some value';

  constructor() {}

  ngOnInit(): void {}

  handleClickMe() {
    this.eventClick.emit(this.event.name);
  }

  logTest() {
    console.log('Logging test...');
  }

  getStartTime() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return { green: isEarlyStart, bold: isEarlyStart };
  }

  getStartTimeStyle() {
    return { color: '#003300', 'font-weight': 'bold' };
  }
}
