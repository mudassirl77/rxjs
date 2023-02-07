import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rxjs-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit {

  constructor() { }
  public title: string;
  public text: string;

  ngOnInit(): void {
    this.title = history.state.title;
    this.text = history.state.text;
  }

}
