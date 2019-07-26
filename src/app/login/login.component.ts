import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  operation: string = 'login';
  email: string = null;
  password: string = null;

  constructor(private authenticacionService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.authenticacionService.loginWithEmail(this.email, this.password)
    .then(
      data => {
        alert('Loggeado correctamente');
        console.log(data);
      }
    )
    .catch( error => {
      alert('Ha ocurrido un error');
      console.log(error)
    });
  }

  register() {
    this.authenticacionService.registerWithEmail(this.email, this.password)
    .then(
      data => {
        alert('Registrado correctamente');
        console.log(data);
      }
    )
    .catch( error => {
      alert('Ha ocurrido un error');
      console.log(error)
    });
  }
  
}