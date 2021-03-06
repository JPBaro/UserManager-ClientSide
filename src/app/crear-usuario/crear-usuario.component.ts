import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';




@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  submitted = false;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  nuevoUsuario(): void {
    this.submitted = false;
    this.usuario = new Usuario();
  }

  save() {
    this.usuarioService.crearUsuario(this.usuario).subscribe(data => console.log(data), error => console.log(error));
    this.usuario = new Usuario();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    // this.nuevoUsuario();  //no seguro que pasa , deberia fallar y devuelve lista
    this.router.navigate(['/usuarios']);
  }

}
