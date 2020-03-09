import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-usuario-registro',
  templateUrl: './usuario-registro.component.html',
  styleUrls: ['./usuario-registro.component.css']
})
export class UsuarioRegistroComponent implements OnInit{

  usuarioRegistro = new FormGroup({
    userinfo: new FormGroup({
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      edad: new FormControl(''),
      email: new FormControl(''),
      username: new FormControl('')
    }),
    password: new FormControl('')
  });

constructor(private fb: FormBuilder ) { }

  ngOnInit() {

// CONTINUAR AQUI!!!

}

}
