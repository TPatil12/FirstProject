import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {



//  .............................. Task1 Start @Input And @Ouput ........................................ 

//   @Input() 
//   name:any;
//   message = "";

//   @Output() 
//   messageChanged = new EventEmitter<string>();


// textChanged(){
//   this.messageChanged.emit(this.message);
// }

// ................................. Task2 Start .....................................



@Input() info: any;
data = {
  name:"", city:""
}

editedName : any;
editedCity: any;

@Output() 
edited = new EventEmitter<object>();

onUpdate() {
  // Send edited data to parent
  
  this.edited.emit(this.data={
    name : this.editedName,
    city : this.editedCity
  });

} 
}








