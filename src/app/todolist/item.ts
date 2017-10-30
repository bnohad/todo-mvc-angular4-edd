/**
 * Created by ohad on 29/10/2017.
 */
export default class Item {
  get done(): boolean {
    return this._done;
  }

  set done(value: boolean) {
    this._done = value;
  }
  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }
  private _label: string;

  private _done: boolean;

  constructor(label: string, done: boolean = false) {
    this.label = label;
    this.done = done;
  }
}
