import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rxjs-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.scss']
})
export class WithLatestFromComponent implements OnInit {

  constructor() { }
  public title: string;
  public text: string;

  ngOnInit(): void {
    this.title = history.state.title;
    this.text = history.state.text;
  }

}
