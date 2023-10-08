import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {

  // ................WITHOUT BUTTON..................

  // day = "";



  // ................WITH BUTTON..................

  // selectedDay = "";
  // day = "";

  // showDay(){
  //   this.selectedDay = this.day;
  // }




// ......................Name And City Type1..................... 

  // friends:any[]=[];

  // city:any;
  // name:any;

  // add(){

  //  let info={
  //   name: this.name,
  //   city: this.city
  //  }

  //  this.friends.push(info);
  //  console.log(this.friends); 
  //  this.name="";
  //  this.city ="";

  // }




  // ......................Name And City Type2 - Stored In LocalStorage     ..................... 


  name ="";
  city="";

  txtName ="";
  txtCity="";


  users:any = [];

  user:any = {name : "" , city : ""}

  constructor()
  {
    this.users = JSON.parse(localStorage.getItem("users") || "[]");
  }

  onSubmitclick()
  {
    this.user = { name : this.txtName , city : this.txtCity };
    this.users.push(this.user);
    localStorage.setItem("users",JSON.stringify(this.users));
    this.users = JSON.parse(localStorage.getItem("users") || "[]");
    console.log(this.users);
    this.txtName =  "";
    this.txtCity = "";
    
  }

}
