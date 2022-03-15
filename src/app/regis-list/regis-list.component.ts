import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-regis-list',
  templateUrl: './regis-list.component.html',
  styleUrls: ['./regis-list.component.css']
})
export class RegisListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  deleteRegistration(index: number): void {
    this.userService.deleteUser(index);
    this.users = this.userService.getUsers();
  }

  updateRegistration(index): void {
    const days = parseInt(prompt('How many weeks do you want to delay your appointment?', '0'), 10);
    this.userService.editAppointment(days, index);
  }

}
