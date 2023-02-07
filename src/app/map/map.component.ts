import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { createLiElement } from '../basic-functions.util';

@Component({
  selector: 'rxjs-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('ulListGroup') ulListGroup: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const example$ = this.source$.pipe(
      map(val => val * 10),
    );

    example$.subscribe(ex => createLiElement(ex.toString(), this.ulListGroup));
  }

  public title: string;
  public text: string;
  public source$: Observable<number>;

  ngOnInit(): void {
    this.title = history.state.title;
    this.text = history.state.text;

    this.source$ = of(1, 2, 3, 4, 5);
  }
}
