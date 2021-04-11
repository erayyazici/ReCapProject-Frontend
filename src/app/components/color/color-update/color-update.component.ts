import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {
  colorUpdateForm: FormGroup;
  color: Color;
  constructor(private formBuilder: FormBuilder,
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private route:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.GetById(params['id']);
  });
  }
  GetById(id: number) {
    this.colorService.GetById(id).subscribe(response => {
      this.color = response.data
      this.createColorUpdateForm();
    })
  }
  createColorUpdateForm(): void {
    this.colorUpdateForm = this.formBuilder.group({
      colorId: [this.color.colorId],
      colorName: [this.color.colorName, Validators.required],
    });
  }

  update() {
    if (this.colorUpdateForm.valid) {
      const color = Object.assign({}, this.colorUpdateForm.value);
      this.colorService.updateColor(color).subscribe(
        (response) => {
          this.toastrService.success(
            `Renk guncellendi: ${color.colorName}`,
            'Basarili'
          );
          this.route.navigate(["colors/set/"])
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Dogrulama hatasi'
              );
            }
          }
        }
      );
    }
  }
}