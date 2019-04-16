import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { DragonsService } from '../dragons.service';
import { first } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  dgForm: FormGroup;
  isUpdate = false;
  idDragon: string;

  constructor(private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dragonService: DragonsService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.baseDGForm();
    this.route.params.subscribe(param => {
      if (param.id) {
        this.isUpdate = true;
        this.idDragon = param.id
        this.getDragon(param.id);
      }
    });
  }

  getDragon(id) {
    this.spinner.show();
    this.dragonService
      .getOne(id)
      .pipe(first())
      .subscribe(dragon => {
        this.dgForm.setValue({ name: dragon.name, type: dragon.type });
        this.spinner.hide();
      });
  }

  onSubmit(formValue) {

    this.isUpdate ? this.update(this.idDragon, formValue) : this.save(formValue)

  }

  save(data) {
    this.spinner.show();
    this.dragonService.save(data)
      .pipe(first())
      .subscribe(data => (alert('Dragão salvo com sucesso...'), this.router.navigate(['/dragons']), this.spinner.hide()), err => alert('Ops..Erro inesperado! tente novamente...'))
  }

  update(id, data) {
    this.spinner.show();
    this.dragonService.update(id, data)
      .pipe(first())
      .subscribe(data => (alert('Dragão salvo com sucesso...'), this.router.navigate(['/dragons']), this.spinner.hide()), err => alert('Ops..Erro inesperado! tente novamente...'))
  }

  baseDGForm() {
    this.dgForm = this.fb.group({
      'name': ['', [Validators.required, Validators.minLength(2)]],
      'type': ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  get f() { return this.dgForm.controls; }

}
