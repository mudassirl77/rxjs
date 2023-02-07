import { Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { operatorData } from '../data';

@Component({
  selector: 'rxjs-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  constructor() { }
  public title: string;
  public text: string;
  public operators = operatorData;

  ngOnInit(): void {
    this.title = history.state.title;
    this.text = history.state.text;
  }
}
