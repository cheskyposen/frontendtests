import {Component, ViewChild, ViewChildren, QueryList, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {stripGeneratedFileSuffix} from '@angular/compiler/src/aot/util';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material';


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
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  title = 'testing-app';

  searchPosition = null;
  searchName = '';
  searchWeight = '';
  searchSymbol = '';


  @ViewChildren('childrenInputs') childrenInputs: QueryList<any>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  private buttonList = false;
  private inputList: any[] = [];
  testData = {
    a: {
      a_a: '2019-01-01',
      a_b: 88,
      a_c: {
        a_c_a: 'value',
      }
    },
    b: '2019-02-01',
    c: '2018-13-30',
    d: {
      d_a: '2018-12-31',
      d_b: '2018-12-41',
      d_c: '2018-07-01'
    },
  };

  dateFormatPattern = /^((\d{4})-(0\d|1[0-2])-(0\d|[1-9]|[12]\d|3[01]))$/;

  private disabled = false;

  private myForm = new FormControl({value: 'childForm', disabled: this.disabled});

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.myForm.disable();

    this.myForm.valueChanges.subscribe(v => {
      /* causes ExpressionChangedAfterItHasBeenCheckedError. Fix error keep code structure in places.   */
      this.disabled = true;
    });

    console.log(this.extractDate(this.testData));
  }

  /* extract all dates from testData. ignore non date values */
  private extractDate(data: any): Date[] {
    const dateArr: Date[] = [];

    this.recursiveWalk(data, dateArr);

    return dateArr;
  }

  private recursiveWalk(obj: any, dateArr: Date[]) {
    for (const key in obj) {
      if (!obj.hasOwnProperty(key)) {
        continue;
      }

      if (typeof obj[key] === 'object' && obj[key] !== null) {
        this.recursiveWalk(obj[key], dateArr);
      } else {
        if (!isNaN(Date.parse(obj[key])) && this.dateFormatPattern.test(obj[key])) {
          dateArr.push(new Date(obj[key]));
        }
      }
    }
  }

  resetPosition() {
    this.searchName = '';
  }
}
