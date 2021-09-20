import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name ="";
  pass = "";
  conPass="";
  constructor() { }

  ngOnInit(): void {
  }
  getValues(val : any)
  {
    console.log(val.name);
    console.log(val.pass);
  }

}
