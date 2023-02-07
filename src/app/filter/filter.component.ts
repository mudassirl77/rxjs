import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { createLiElement } from '../basic-functions.util';

@Component({
  selector: 'rxjs-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @ViewChild('ulListGroup') ulListGroup: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const example$ = this.source$.pipe(
      filter(val => val > 10),
    );

    example$.subscribe(ex => createLiElement(ex.toString(), this.ulListGroup));
  }

  public title: string;
  public text: string;
  public source$: Observable<number>;

  ngOnInit(): void {
    this.title = history.state.title;
    this.text = history.state.text;

    this.source$ = of(2, 30, 22, 5, 60, 1);
  }

}
