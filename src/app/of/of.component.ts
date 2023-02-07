import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Presenter } from '../models/rxjs.interfaces';

@Component({
  selector: 'rxjs-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {

  constructor() { }
  public title: string;
  public text: string;

  ngOnInit(): void {
    this.title = history.state.title;
    this.text = history.state.text;
  }

  public presenter$: Observable<Presenter> = of({ name: 'Dinesh', role: 'Engineer' });
}
