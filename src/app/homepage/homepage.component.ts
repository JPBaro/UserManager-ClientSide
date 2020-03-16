import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent{ //implements OnInit {
 // content: string;

 // constructor(private userService: UsuarioService) { } // IT SHOULD CALL MY MAIN-NAV SERVICE APP

 // ngOnInit() {
   // this.userService.getUsuariosList().subscribe(
   //   data => {
   //     this.content = data;
   //   },
   //   err => {
    //    this.content = JSON.parse(err.error).message;
    //  }
  //  );
 // }
}