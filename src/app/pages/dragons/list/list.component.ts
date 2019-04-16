import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { first } from 'rxjs/operators';
import { DragonsService } from '../dragons.service';
import { Item } from './item/item.model';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dragons: Item;
  searchBarState = 'hidden'
  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(private dragonService: DragonsService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService) {

  }

  ngOnInit() {
    this.spinner.show();
    this.dragonService.getAll().subscribe(
      resources => (this.dragons = this.sortItem(resources), this.spinner.hide()),
      error => alert('Erro ao carregar a lista')
    );
  }


  sortItem(items) {
    return items.sort((a, b) => {
      if (a.name !== ' ') {
        if (a.name > b, name) return 1;
        if (a.name < b.name) return -1;
      }
      return 0;
    })
  }

  deletarItem(id) {
    if (id) {
      console.log(id);
      this.dragonService.delete(id)
        .pipe(first())
        .subscribe(data => (alert('Dragão deletado com sucesso..'), this.ngOnInit()), err => alert('Ops...Erro inesperado! tente novamente.'))
    }

  }

}
