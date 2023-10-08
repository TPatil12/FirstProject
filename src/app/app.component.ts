import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'FirstProject';
  // name = 'India';

// ......................... Task1 Start @Input And @Ouput .................................

// name="Tushar";

// message = "";

// recievedMessage(msg:string){
// this.message = msg;
// }

// ............................. Task2 Start ..............................

myName = "";
myCity = "";
data = {
  name:"", city:""
}
name:any;
city:any;

onUpdated(updatedData: any) {
  // Handle data received from child
  this.myName = updatedData.name;
  this.myCity = updatedData.city;    
  console.log('Data received from child:', updatedData);
}

onSubmit(){
  this.data = {
    name: this.myName,
    city: this.myCity
  }

}

}
