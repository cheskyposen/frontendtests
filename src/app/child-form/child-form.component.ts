import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR , FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChildFormComponent),
      multi: true
    }
  ]
})
export class ChildFormComponent implements OnInit,  ControlValueAccessor {

  private disabled = false;
  private form = new FormControl('my from');
  constructor() { }

  ngOnInit() {

     this.form.valueChanges.subscribe(d => {
        this.onChange(d);
    });
  }

  onTouched = (d: any) => {};

  writeValue(val: any): void {
    console.log(val);
    this.form.setValue(val);

  }

  onChange = (d: any) => {};

  registerOnChange(fn): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {this.form.disable(); } else { this.form.enable(); }
  }

}
