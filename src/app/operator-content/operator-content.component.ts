import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rxjs-operator-content',
  templateUrl: './operator-content.component.html',
  styleUrls: ['./operator-content.component.css']
})
export class OperatorContentComponent {
  @Input() title: string;
  @Input() text: string;
  @Input() notes?: string;
  @Input() showImage: boolean = true;

  constructor() {

  }

}
