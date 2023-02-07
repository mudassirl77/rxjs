import { Component } from '@angular/core';
import { operatorData } from '../app/data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';
  public data = operatorData;
}
