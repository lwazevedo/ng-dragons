import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { Item } from './item.model'
import { DragonsService } from '../../dragons.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  animations: [
    trigger('itemAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ItemComponent implements OnInit {
  itemState = 'ready'
  @Input() dragon: Item

  constructor(private dragonService: DragonsService) { }

  ngOnInit() {
  }

  deletarItem(id) {
    if (id) {
      console.log(id);
      this.dragonService.delete(id)
        .pipe(first())
        .subscribe(data => alert('Dragão deletado com sucesso..'), err => alert('Ops...Erro inesperado! tente novamente.'))
    }

  }

}
