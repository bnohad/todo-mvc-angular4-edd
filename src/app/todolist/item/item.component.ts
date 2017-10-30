import {AfterViewChecked, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import Item from "../item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements AfterViewChecked {
  @ViewChild('input') input;

  @Input() item: Item;
  @Output() labelChange = new EventEmitter<string>();
  @Output() toggleState = new EventEmitter();
  @Output() removeItem = new EventEmitter();

  public isEditing: boolean = false;

  constructor() { }

  ngAfterViewChecked() {
    if(this.isEditing) {
      this.input.nativeElement.focus();
    }
  }

  toggleEditMode(state: boolean) {
    this.isEditing = state;
  }

  changeItemLabel(label: string) {
    this.labelChange.emit(label);
    this.toggleEditMode(false);
  }
}
