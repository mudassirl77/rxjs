import { Component, Input, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { operatorData } from '../data';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {
  constructor() { }
  public title: string;
  public text: string;
  public operators = operatorData;

  ngOnInit(): void {
    this.title = history.state.title;
    this.text = history.state.text;

    fromEvent(document.getElementById('type-ahead'), 'keyup')
      .pipe(
        debounceTime(200),
        map((e: any) => e.target.value),
        distinctUntilChanged(),
        switchMap(keys => this.operatorRequest$(keys)),
        tap(result => (this.operators = result))
      )
      .subscribe();
  }

  operatorRequest$ = (keys: string) => of(this.getOperators(keys));

  getOperators = (keys: string) => operatorData.filter(operator => operator.title.toLowerCase().includes(keys.toLowerCase()));
}
