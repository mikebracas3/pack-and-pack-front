import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {

  users: Observable<User[]>;
  queryUsername:"";
  queryhobby:"";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers({});
  }

  getUsers(query): void {
    this.userService.getUsers(query).subscribe((resp) => {
      this.users = resp.response;
    });
  }

  search(){
    var query = {"username": this.queryUsername, "hobby":this.queryhobby};
    if(this.queryUsername == null || this.queryUsername.length < 1) delete query.username;
    if(this.queryhobby == null || this.queryhobby.length < 1) delete query.hobby;
    this.getUsers(query);
  }

  delete(user){
    this.userService.deleteUser(user._id).subscribe((resp) => {
      this.getUsers({});
    });
  }

}
