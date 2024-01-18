import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id=101;
  name="angular";
  something="";

  books = [
    {title: "Harry Potter 1", author: "J K Rowling", stock: 5, category: "Horror"},
    {title: "Harry Potter 2", author: "J K Rowling", stock: 3, category: "Fantasy"},
    {title: "Harry Potter 3", author: "J K Rowling", stock: 4, category: "Horror"},
    {title: "Harry Potter 4", author: "J K Rowling", stock: 8, category: "Romance"},
    {title: "Harry Potter 5", author: "J K Rowling", stock: 4, category: "Horror"},
    {title: "Harry Potter 6", author: "J K Rowling", stock: 2, category: "Horror"},
];

  category = [
    {name:"Horror"},
     {name:"Romance"},
    {name:"Fantasy"}
  
  ];


  constructor() { }

  ngOnInit(): void {
  }

  greatUser(){
    return "hello java program " + this.name;
  }

}
