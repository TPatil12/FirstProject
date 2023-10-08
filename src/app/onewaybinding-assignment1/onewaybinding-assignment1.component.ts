import { Component } from '@angular/core';

@Component({
  selector: 'app-onewaybinding-assignment1',
  templateUrl: './onewaybinding-assignment1.component.html',
  styleUrls: ['./onewaybinding-assignment1.component.css']
})
export class OnewaybindingAssignment1Component {

  months = ["jan", "feb", "march", "april", "may", "june", "july", "aug", "sep", "octo", "nov", "dec"];

  name = "";

monthChanged(event:Event){
let ctrl = <HTMLInputElement>(event.target);
alert("You selected "+ ctrl.value)
}



clicked(){
alert("Hello " +  this.name);
}

textInput(event:Event)
{
let ctrl = <HTMLInputElement>event.target;
this.name = ctrl.value; 
}




}
