import { Component, OnInit } from '@angular/core';
import { User, GenderEnum } from './../models/user.model';
import { UserService } from './../services/user.service';

class UserForm  {
  firstname: string;
  lastname: string;
  gender: GenderEnum;
  city: string;
  dateOfBirth: string;
  dateOfApp: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {



  constructor(private userService: UserService) {}

  ngOnInit(): void {
  }

  addUser(userData: UserForm): void {
    const appDate = new Date();
    appDate.setDate(appDate.getDate() + 2 * 7);
    console.log(appDate);
    const user = new User(
      userData.firstname,
      userData.lastname,
      userData.gender,
      userData.dateOfBirth,
      userData.city,
      appDate.toString()
    );
    this.userService.addUser(user);
  }
}
