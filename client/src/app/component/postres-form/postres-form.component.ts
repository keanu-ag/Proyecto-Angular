import { Component, HostBinding, OnInit } from '@angular/core';
import { Postre, Mezcla } from '../models/Postres';

import { PostresService } from '../../services/postres.service'
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-postres-form',
  templateUrl: './postres-form.component.html',
  styleUrls: ['./postres-form.component.css']
})
export class PostresFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  postre : Postre = {
    id: 0,
    Nombre : ''
  };

  mezcla : Mezcla = {
    id_Producto: 0,
    Cantidad: 0,
    id_Ingrediente: 0
  };

  constructor(private postreService : PostresService) { }

  ngOnInit(): void {
  }

  savePostre(){
    this.postreService.savePostre(this.postre)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );
  }

  // addIngrediente(){
  //   const control = <FormArray>
  // }

}
