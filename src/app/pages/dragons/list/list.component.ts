import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { DragonsService } from '../dragons.service';
import { List } from './list.model';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dragons: List;
  searchBarState = 'hidden'
  searchForm: FormGroup;
  searchControl: FormControl;
  config: any;

  constructor(private dragonService: DragonsService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 8
    }
  }

  ngOnInit() {
    this.spinner.show();
    this.dragonService.getAll().subscribe(
      resources =>
        (this.dragons = this.sortItem(resources),
          this.spinner.hide()),
      error =>
        (this.toastr.error('Ops...Erro inesperado! tente novamente.'),
          this.spinner.hide())
    );
  }

  pageChange(newPage: number) {
    this.config.currentPage = newPage
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
      this.dragonService.delete(id)
        .pipe(first())
        .subscribe(data => {
          this.toastr.success('Dragão deletado com sucesso..');
          this.ngOnInit();
        },
          err => this.toastr.error('Ops...Erro inesperado! tente novamente.'))
    }

  }

}
