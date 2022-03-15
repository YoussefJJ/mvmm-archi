import { Component, OnInit } from '@angular/core';
import { User, GenderEnum } from './../models/user.model';
import { UserService } from './../services/user.service';

class UserForm  {
  firstname: string;
  lastname: string;
  gender: GenderEnum;
  city: string;
  dateOfBirth: string;
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
    const user = new User(
      userData.firstname,
      userData.lastname,
      userData.gender,
      userData.dateOfBirth,
      userData.city,
    );
    this.userService.addUser(user);
    this.display(user);
  }

  display(userData) {
    console.log(userData);
  }

}
