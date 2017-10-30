import { Injectable } from '@angular/core';
import Item from "./item";

@Injectable()
export class StateService {
  private _items: Item[] = [];
  private _countMode: string = 'all';
  private _allToggle: boolean = false;

  constructor() { }

  addItem(label): void {
    this._items.push(new Item(label));
  }

  getItems() {
    return this.filterItems(this._countMode);
  }

  filterItems(mode) {
    let filtered;

    switch(mode) {
      default:
      case 'all':
        filtered = this._items;
        break;

      case 'done':
        filtered = this._items.filter(item => item.done);
        break;

      case 'active':
        filtered = this._items.filter(item => !item.done);
        break;
    }

    return filtered;
  }

  removeItem(item) {
    this._items.splice(this.getItemIndex(item), 1);
  }

  updateItemLabel(item: Item, label: string) {
    this._items[this.getItemIndex(item)].label = label;
  }

  updateItemState(item: Item, state: boolean) {
    console.log(item, state);
    this._items[this.getItemIndex(item)].done = state;
  }

  getItemIndex(item: Item): number {
    return this._items.indexOf(item);
  }

  changeCountMode(mode: string) {
    this._countMode = mode;
  }

  getCountMode(): string {
    return this._countMode;
  }

  getCounter(): number {
    let counter = 0;

    switch(this._countMode) {
      default:
      case 'all':
        counter = this._items.length;
        break;

      case 'done':
        counter = this._items.filter(item => item.done).length;
        break;

      case 'active':
        counter = this._items.filter(item => !item.done).length;
        break;
    }

    return counter;
  }

  toggleAllItems() {
    this._allToggle = !this._allToggle;

    this._items.forEach(item => item.done = this._allToggle);
  }

  toggleAllState(): boolean {
    return this._allToggle;
  }

  clearCompleted() {
    console.log('clear completed');
    this._items = this.filterItems('active');
  }
}
