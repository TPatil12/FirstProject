import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  Today = new Date();

  friuts = ["apple", "orange","grapes","mango", "kivi"];
  
  name = {name:"Tushar", email:"tusharpatil1216@gmail.com" , mobilee_No:"8379885643"};

}
  