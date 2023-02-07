import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, } from 'rxjs';
import { distinctUntilChanged, debounceTime, filter, map, tap, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'rxjs-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit, AfterViewInit {
  @ViewChild('weight') weightInput: ElementRef;
  @ViewChild('height') heightInput: ElementRef;
  @ViewChild('bmi') bmiInput: ElementRef;

  constructor() { }
  public title: string;
  public text: string;
  private weight$!: Observable<string>;
  private height$!: Observable<string>;

  //   private weight = of(70, 72, 76, 79, 75);
  //   private height = of(1.76, 1.77, 1.78);
  //   private bmi$ = combineLatest(weight, height, (w, h) => w / (h * h));
  // bmi$.subscribe(x => console.log('BMI is ' + x));

  ngOnInit(): void {
    this.title = history.state.title;
    this.text = history.state.text;
  };

  ngAfterViewInit(): void {
    const weight$ = fromEvent(this.weightInput.nativeElement, 'change')
      .pipe(
        filter(Boolean),
        debounceTime(150),
        distinctUntilChanged()
      );

    const height$ = fromEvent(this.heightInput.nativeElement, 'change')
      .pipe(
        filter(Boolean),
        debounceTime(150),
        distinctUntilChanged()
      );

    weight$.pipe(
      withLatestFrom(height$),
      map(([weight, height]) => Number((weight as any).target.value) / (Number((height as any).target.value) * Number((height as any).target.value))),
      tap(value => console.log(value))
    )
      .subscribe(value => console.log(value));
  }
}
