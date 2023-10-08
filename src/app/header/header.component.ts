import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 
    a: number = 10;
    b: number = 20;
    c: number = 0;

    add(){
      this.c = this.a + this.b;
    }

}
