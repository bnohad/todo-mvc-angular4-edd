import {AfterViewChecked, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {

  @Input() counter: number;
  @Input() mode: string;
  @Output() countMode = new EventEmitter<string>();
  @Output() clearAllCompleted = new EventEmitter();

  constructor() {
  }

  changeCounterMode(mode: string) {
    this.countMode.emit(mode);
  }

}
