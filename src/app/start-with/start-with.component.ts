import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rxjs-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.scss']
})
export class StartWithComponent implements OnInit {
  constructor() { }
  public title: string;
  public text: string;

  ngOnInit(): void {
    this.title = history.state.title;
    this.text = history.state.text;
  }

}
