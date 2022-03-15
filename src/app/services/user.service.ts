import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

users: User[] =  [];
  constructor() {

  }

  addUser(user: User): void {
    this.users.push(user);
  }

  deleteUser(ind: number): void {
    this.users.splice(ind, 1);
    console.log(this.users);
  }

  getUsers(): User[] {
    return this.users.slice();
  }
}
