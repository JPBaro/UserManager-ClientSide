import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Usuario } from '../usuario';

import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-detalles-usuario',
  templateUrl: './detalles-usuario.component.html',
  styleUrls: ['./detalles-usuario.component.css']
})
export class DetallesUsuarioComponent implements OnInit {

  username: string;
  usuario: Usuario;

  constructor(private route: ActivatedRoute, private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = new Usuario();

    this.username = this.route.snapshot.params['username'];

    this.usuarioService.getUsuario(this.username)
      .subscribe(data => {
        console.log(data);
        this.usuario = data;
      },
      error => console.log(error));
  }

  list() {
    this.router.navigate(['usuarios']);
  }
}


