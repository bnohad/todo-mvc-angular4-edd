import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() toggleAllState: boolean;
  @Output() toggleAllItems = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
