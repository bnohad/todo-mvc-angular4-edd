import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  newItemLabel = '';

  @Output() newItem = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  emitNewItem($event) {
      $event.preventDefault();

      console.log(this.newItemLabel);
      this.newItem.emit(this.newItemLabel);
      this.newItemLabel = '';
  }
}
