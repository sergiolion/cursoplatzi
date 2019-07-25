import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class UserService{

  friends: User[];

  constructor(){

    let myUser: User = {
      nick: 'vnz',
      subnick: 'srg',
      edad: 32,
      mail: 'srgprb@gmail.com',
      friend: false,
      id: 1

    };

    let User2: User = {
      nick: 'broly',
      edad: 28,
      mail: 'brol0rz@gmail.com',
      friend: true,
      id: 2
    };

    let User3: User = {
      nick: 'wilfred',
      edad: 12,
      mail: 'wilfred19@gmail.com',
      friend: true,
      id: 3
    };

    let User4: User = {
      nick: 'cabeza',
      edad: 54,
      mail: 'cabezon@gmail.com',
      friend: false,
      id: 4
    };

    let User5: User = {
      nick: 'm0n',
      edad: 35,
      mail: 'm0n@gmail.com',
      friend: true,
      id: 5
    };
    

    this.friends = [myUser, User2, User3, User4, User5];
  }

  getFriends() {
    return this.friends;
  }
}