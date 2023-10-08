import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-form',
  templateUrl: './one-way-form.component.html',
  styleUrls: ['./one-way-form.component.css']
})
export class OneWayFormComponent {

  name:string = "";
  txtName = "";

  email:string = "";
  txtEmail = "";

  mono:string = "";
  txtMono = "";

  city:string = "";
  txtCity = "";

  inputText1(event:Event)
  {
    this.txtName = (<HTMLInputElement>event.target).value;
  }

  inputText2(event:Event)
  {
    this.txtEmail = (<HTMLInputElement>event.target).value;
  }

  inputText3(event:Event)
  {
    this.txtMono = (<HTMLInputElement>event.target).value;
  }

  inputText4(event:Event)
  {
    this.txtCity = (<HTMLInputElement>event.target).value;
  }

  submit()
  {  
    this.name=this.txtName;
    console.log(this.name);
    
    this.email=this.txtEmail;
    console.log(this.email); 

    this.mono=this.txtMono;
    console.log(this.mono); 

    this.city=this.txtCity;
    console.log(this.city); 
  }  
  

  
}
