import {Component, ViewChild, ViewChildren, QueryList, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  title = 'testing-app';

  @ViewChildren('childrenInputs') childrenInputs: QueryList<any>;

  private buttonList: any = false;
  private inputList = [];

  private disabled = false;

  private myForm = new FormControl('childForm');

  testData = {
    a: {
      a_a: '2019-01-01',
      a_b: 88,
      a_c: {
        a_c_a: 'value',
      }
    },
    b: '2019-02-01'
  };

  ngOnInit() {

    this.myForm.disable();

    this.myForm.valueChanges.subscribe(v => {
      /* causes ExpressionChangedAfterItHasBeenCheckedError. Fix error keep code structure in places.   */
      this.disabled = true;
    });
  }

  /* extract all dates from testData. ignore non date values */
  private extractDate(obj: any): Date[] {
    return [new Date()];
  }

}
