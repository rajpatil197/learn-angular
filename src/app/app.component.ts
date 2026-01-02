import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//template: `<div><H1>Welcome {{name}}</H1></div>`,
  styleUrls: ['./app.component.css']//  styles: [`H1{ color:red;}`]
})
export class AppComponent {
  title = 'learn-angular';
}
