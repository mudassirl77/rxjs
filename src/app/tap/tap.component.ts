import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { createLiElement } from '../basic-functions.util';

@Component({
  selector: 'rxjs-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit, AfterViewInit {
  @ViewChild('ulListGroup') ulListGroup: ElementRef;
  constructor() { }

  ngAfterViewInit(): void {
    const source$ = of(1, 2, 3, 4, 5);
    source$.pipe(
      tap(val => console.log(`BEFORE MAP: ${val}`)),
      map(val => val + 10),
      tap(val => console.log(`AFTER MAP: ${val}`)),
      tap(val => createLiElement(val.toString(), this.ulListGroup)),
    ).subscribe();
  }

  public title: string;
  public text: string;

  ngOnInit(): void {
    this.title = history.state.title;
    this.text = history.state.text;
  }

}
