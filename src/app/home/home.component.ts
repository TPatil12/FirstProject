import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name:string = "iGAP Technologies";
  enabled = false;

  fruits = ['Apple', 'Banana', 'Strawberry','Mango'];

  txtName = "";
  fruit = "";

  changevalue()
  {

    this.enabled = !this.enabled;

    console.log(this.enabled);
    
  }

  fruitchange(event:Event)
  {
    this.fruit = (<HTMLInputElement>event.target).value;
    console.log(this.fruit);
    
  }

  inputText(event:Event)
  {
    this.txtName = (<HTMLInputElement>event.target).value;
    
  }
  saveData()
  {
    this.name = this.txtName;
    console.log(this.name);
    
  }

  onchangevalue(event:Event)
  {
    let a = (<HTMLSelectElement>event.target).value;
    console.log(a);
    
  }
}
