import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserForm } from '../../models/UserForm';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.less']
})
export class UsersFormComponent implements OnInit {

  userForm:FormGroup;
  user:UserForm;
  genders = ['M', 'F'];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = new UserForm('','','','',1,'',',','');

    this.userForm = new FormGroup({
      username: new FormControl(this.user.username, [Validators.required,Validators.minLength(4)]),
      email: new FormControl(this.user.email,[Validators.required, Validators.email]),
      password: new FormControl(this.user.password,[Validators.required,Validators.minLength(6)]),
      tel: new FormControl(this.user.tel, [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      age: new FormControl(this.user.age, [Validators.pattern("^[0-9]*$"),Validators.required,Validators.min(0), Validators.max(130),Validators.maxLength(3)]),
      hobby: new FormControl(this.user.hobby, [Validators.required]),
    });
  }

  onSubmit() {
    this.user.age = parseInt(this.user.age.toString());
    this.userService.addUser(this.user)
    .subscribe((resp) => {
          console.log(resp);
          this.router.navigate(['/users']);
      });
  }

  get email() { return this.userForm.get('email'); }

}
