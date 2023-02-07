import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator-card',
  templateUrl: './operator-card.component.html',
  styleUrls: ['./operator-card.component.css']
})
export class OperatorCardComponent implements OnInit {

  @Input() public title!: string;
  @Input() public text: string;

  public routerLink = `/operators/${this.title}`;

  constructor() { }

  ngOnInit(): void {
  }

  public navigateTo() {
  }

}
