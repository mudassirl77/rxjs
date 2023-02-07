import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { throwError, of, from, Observable } from 'rxjs';
import { catchError, tap, map, switchMap } from 'rxjs/operators';
import { createLiElement } from '../basic-functions.util';

@Component({
  selector: 'rxjs-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss']
})
export class CatchErrorComponent implements OnInit, AfterViewInit {

  @ViewChild('ulListGroup') ulListGroup: ElementRef;

  constructor() { }

  public title: string;
  public text: string;

  ngOnInit(): void {
    this.title = history.state.title;
    this.text = history.state.text;
  }

  ngAfterViewInit(): void {
    const source$ = of(1, 2, 3, 4);
    const fakeRequest$ = throwError('Error thrown from switchMap');
    const example$ = source$.pipe(
      switchMap(_ => fakeRequest$),
      catchError(val => of(`I caught: ${val}`))
    );

    example$.subscribe(val => createLiElement(val, this.ulListGroup, 'danger'));
  }

}
