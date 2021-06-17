//
//============================================
//; Title: my-details.component.html
//; Author: Richard Krasso
//; Modified by: Eunice
//; Date: 1 June 2021
//; Description: My details listed on right column
//;===========================================
//

import { Component, OnInit } from '@angular/core';
//typescript class of Person
export default class Person{
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2021", "#CodingWithAngular", "#ngOmaha"
  ];
 constructor(fullName: string, favoriteFood: string, favoriteColor: string){
  this.fullName = fullName;
  this.favoriteFood = favoriteFood;
  this.favoriteColor = favoriteColor;
  }

}
@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {
//new variable of myProfile
  myProfile: Person;

  constructor() {
    this.myProfile = new Person("Eunice Lim", "Spaghetti", "Purple");
    this.myProfile.toString();
}
  ngOnInit(): void {
  }

}
