import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';


@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})

export class ListaUsuarioComponent implements OnInit {

  usuarios: Observable<Usuario[]>;
  usuario: Usuario;
  username: string;
  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.usuarioService.getUsuario.bind
    ( data => {
        this.usuario = data ; })
    this.reloadData();
  }

  reloadData() {
    return this.usuarios = this.usuarioService.getUsuariosList();
  }

deleteUsuario(username: string) {  
    this.usuarioService.deleteUsuario(username)  
      .subscribe(  
        data => {  
          console.log(data); 
          this.usuarioService.getUsuariosList().subscribe(data =>{  
            this.usuarios =data  
            })  
        },  
        error => console.log(error));  
  }  

  usarioDetalles(username: string) {
    this.router.navigate(['info/', username]);
  }
}
