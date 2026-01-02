import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  name ="Rajvardhan Patil";
  title="";
  fullname="";
  person={
    "name":"Rajvardhan Uttam Patil",
    "village":"Tarale Khurd"
  }
  date = new Date();  

  isdisable:boolean=true;
  hascolor=true;

  displayname=true;

  disabled(){
    this.isdisable = !this.isdisable;
    this.hascolor = !this.hascolor;
  }

  show(event:any){
    console.log(event);
    
    this.title = "Welcome To Radhanagri";
  }
  show2(event:any){
    console.log(event);
    
    this.title = this.title.replace("Welcome To Radhanagri","Hey Kolhapurkar");
  }
  mylog(value:any){
    console.log(value);
    
  }

  hide(){
    this.displayname = !this.displayname;
  }

  color="green";

  colorchange(){
    if(this.color == "red"){
      this.color = "green";
    }else if(this.color == "green"){
      this.color = "black";
    }else {
      this.color ="red";
    }
  }

  cars = ["Innova crysta","BMW M5","Virtus","Altroz","Xuv 700"];
}
