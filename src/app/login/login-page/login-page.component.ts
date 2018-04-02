import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/model/user';
import { LoginService } from '../../shared/services/login.service';
import { ActivatedRoute, Router} from '@angular/router'



@Component({
  selector: 'devx-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private service : LoginService,
              private activatedRoute : ActivatedRoute,
              private router : Router) { }


  user : User  = {
    id:'',
    userName:'',
    password:'',
    email : '',
    address : {},
    phone : '',
    website : '',
    company : {}
  };            

  ngOnInit() {
  }

  loginUser (user : User) : void {

 this.service.login(user)
    .subscribe((result)=>{
      console.log('Objeto actualizado', result);
    });
  }

}
