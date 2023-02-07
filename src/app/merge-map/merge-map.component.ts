import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';
import { createLiElement } from '../basic-functions.util';

@Component({
  selector: 'rxjs-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit, AfterViewInit {
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
      mergeMap(val => of(val).pipe(delay(2000)))
    );
    example$.subscribe(val =>
      createLiElement(val, this.ulListGroup)
    );
  }

}
