import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { LoginComponent } from './login/login.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = ' GESTION-USUARI@S';

  // components for LOGIN
  private roles: string[];
  isLoggedIn = false;
  showUserStand = false;
  username: string;
  isLoginFailed = false;
  errorMessage = 'oh my god!!';

  showLogin: boolean;
  showInfo: boolean;


  registerForm: FormGroup;
  loginEvent: LoginComponent;
  submitted = false;

  //Imported services for Login


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router) { }

  // SHOW LOGIN FORM POPUP (TRUE)
  show(id) {
    if (id == 'loginPopup') {
      this.showLogin = true; // Show-Hide Modal Check 
    }
    if (id == 'infoPopup') {
    }
  }

  // Bootstrap Modal Close event
  hide(id) {
    if(id == 'loginPopup'){
    this.showLogin = false;
    }
    if(id == 'infoPopup'){
      this.showInfo = false;
      }


  }

  ngOnInit() {

    // LOGIN FORM REFERENCES
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
    this.isLoggedIn = !!this.tokenStorage.getToken();

    //STATUS LOGGEDIN REFERENCE FOR APP-ROOT
    if (this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      this.roles = user.roles;
      this.showUserStand = this.roles.includes('ROLE_USER');
      this.username = user.username;
    }
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {  // continuar por aqui !!!!!!!!!!!!! importando y lanzando login form desde popup

    console.log('onSubmit LOGIN');
    this.submitted = true;


    this.authService.loginC(this.registerForm.value)
      .subscribe(
        data => {
          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUser(data);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          // this.reloadPage(); ver como hacer cuando isLoggedIn true
        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    if (this.submitted) {
      this.registerForm.disable;    }  // revisar como se cierra al click envio

  }
  logout() {
    this.tokenStorage.signOut();
    /// pensar logout
    window.location.reload();
    this.router.navigate(['/homepage']);
  }
}
