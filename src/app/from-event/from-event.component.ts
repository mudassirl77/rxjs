import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { createLiElement } from '../basic-functions.util';

@Component({
  selector: 'rxjs-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {
  @ViewChild('btnGenerate') btnGenerate: ElementRef;
  @ViewChild('ulListGroup') ulListGroup: ElementRef;

  constructor() { }
  public title: string;
  public text: string;

  public generateLiElement$!: Observable<any>;

  ngOnInit(): void {
    this.title = history.state.title;
    this.text = history.state.text;
  }

  ngAfterViewInit(): void {
    this.generateLiElement$ = fromEvent(this.btnGenerate.nativeElement, 'click');
  }

  generateLiElement() {
    this.generateLiElement$.pipe(
      take(1),
      tap(console.log)
    ).subscribe((event: PointerEvent) => createLiElement((event.currentTarget as any).innerHTML, this.ulListGroup));
  }

}
