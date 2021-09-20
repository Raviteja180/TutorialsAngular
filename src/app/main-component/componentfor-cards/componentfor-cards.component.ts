import { Component, OnInit } from '@angular/core';
import data from "../../../data.json";

@Component({
  selector: 'app-componentfor-cards',
  templateUrl: './componentfor-cards.component.html',
  styleUrls: ['./componentfor-cards.component.css']
})
export class ComponentforCardsComponent implements OnInit {

  cards=data;
  constructor() { }

  ngOnInit(): void {

  }

}
