import { Component, OnInit } from '@angular/core';

import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    let myUser: User = {
      nick: 'vnz',
      subnick: 'srg',
      edad: 32,
      mail: 'srgprb@gmail.com',
      friend: false,
      id: 1

    };

    console.log(myUser);
    
  }

  ngOnInit() {
  }

}