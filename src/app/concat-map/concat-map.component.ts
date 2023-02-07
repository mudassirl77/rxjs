import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
import { createLiElement } from '../basic-functions.util';

@Component({
  selector: 'rxjs-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit, AfterViewInit {
  @ViewChild('ulListGroup') ulListGroup: ElementRef;
  constructor() { }
  public title: string;
  public text: string;

  ngOnInit(): void {
    this.title = history.state.title;
    this.text = history.state.text;
  }

  ngAfterViewInit(): void {
    const source$ = of('First value received', 'Second value received');
    const example$ = source$.pipe(
      concatMap(val => of(val).pipe(delay(2000)))
    );
    example$.subscribe(val =>
      createLiElement(val, this.ulListGroup)
    );
  }
}
