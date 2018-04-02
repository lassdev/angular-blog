import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginService } from '../shared/services/login.service';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports : [
    FormsModule
  ],

  
  declarations: [LoginPageComponent],
  providers: [LoginService]
})
export class LoginModule { }
