import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-form',
  templateUrl: './two-way-form.component.html',
  styleUrls: ['./two-way-form.component.css']
})
export class TwoWayFormComponent {

  
  name:string = "";
  txtName = "";

  email:string = "";
  txtEmail = "";

  mono:string = "";
  txtMono = "";

  city:string = "";
  txtCity = "";


  // submit()
  // {  
  //   this.name=this.txtName;
  //   console.log(this.name);
    
  //   this.email=this.txtEmail;
  //   console.log(this.email); 

  //   this.mono=this.txtMono;
  //   console.log(this.mono); 

  //   this.city=this.txtCity;
  //   console.log(this.city); 
  // }  
  


}
