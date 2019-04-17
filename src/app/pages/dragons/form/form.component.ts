import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { DragonsService } from '../dragons.service';
import { first } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  dgForm: FormGroup;
  isUpdate = false;
  idDragon: string;
  titulo = 'Novo Dragão'
  constructor(private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dragonService: DragonsService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.baseDGForm();
    this.route.params.subscribe(param => {
      if (param.id) {
        this.titulo = 'Atualizar Dragão'
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
      .subscribe(data =>
        (this.toastr.success('Dragão salvo com sucesso...'),
          this.router.navigate(['/dragons']),
          this.spinner.hide()),
        err =>
          (this.toastr.error('Ops...Erro inesperado! tente novamente.')
            , this.spinner.hide()))
  }

  update(id, data) {
    this.spinner.show();
    this.dragonService.update(id, data)
      .pipe(first())
      .subscribe(data =>
        (this.toastr.success('Dragão salvo com sucesso...'),
          this.router.navigate(['/dragons']),
          this.spinner.hide()),
        err =>
          (this.toastr.error('Ops...Erro inesperado! tente novamente.'),
            this.spinner.hide()))
  }

  baseDGForm() {
    this.dgForm = this.fb.group({
      'name': [null, [Validators.required, Validators.minLength(2)]],
      'type': [null, [Validators.required, Validators.minLength(2)]],
    });
  }

  get f() { return this.dgForm.controls; }

}
