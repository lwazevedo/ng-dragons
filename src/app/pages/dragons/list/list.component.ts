import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

import { DragonsService } from '../dragons.service';
import { Item } from './item/item.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        'max-height': '0px'
      })),
      state('visible', style({
        opacity: 1,
        'max-height': '70px',
        'margin-top': '20px'
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class ListComponent implements OnInit {

  dragons: Item;
  searchBarState = 'hidden'
  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(private dragonService: DragonsService, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.dragonService.getAll().subscribe(
      resources => this.dragons = this.sortItem(resources),
      error => alert('Erro ao carregar a lista')
    );
  }

  sortItem(items) {
    return items.filter(item => item.name !== ' ').sort((a, b) => {
      if (a.name > b, name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    })
  }

  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }

}
