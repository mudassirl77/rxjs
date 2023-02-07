import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { createLiElement } from '../basic-functions.util';

@Component({
  selector: 'rxjs-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit, AfterViewInit {
  @ViewChild('ulListGroup') ulListGroup: ElementRef;

  constructor() { }

  public title: string;
  public text: string;
  public presenters$: Observable<string> = from(['Dinesh', 'Mudassir', 'Tashley']).pipe(delay(2000));

  ngOnInit(): void {
    this.title = history.state.title;
    this.text = history.state.text;

  }

  ngAfterViewInit(): void {
    this.presenters$.subscribe(presenter => createLiElement(presenter, this.ulListGroup));
  }

}
