import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { createLiElement } from '../basic-functions.util';

@Component({
  selector: 'rxjs-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  @ViewChild('ulListGroup') ulListGroup: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const example$ = this.source$.pipe(
      take(2),
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
