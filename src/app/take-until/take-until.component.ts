import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { createLiElement } from '../basic-functions.util';

@Component({
  selector: 'rxjs-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.css']
})
export class TakeUntilComponent implements OnInit, OnDestroy {
  @ViewChild('ulListGroup') ulListGroup: ElementRef;
  private destroyed$ = new Subject<void>();
  private interval$: Observable<number> = interval(1000);

  constructor() { }
  public title: string;
  public text: string;

  ngOnInit(): void {
    this.title = history.state.title;
    this.text = history.state.text;
    this.interval$.pipe(
      takeUntil(this.destroyed$),
      tap(val => console.log(val))
    ).subscribe(val => createLiElement(val.toString(), this.ulListGroup));
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
