import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss'],
})
export class AddDialogComponent implements OnInit {
  imgURL: any;
  AddDialog = new FormGroup({
    title: new FormControl(''),
    metaTitle: new FormControl(''),
    shop: new FormControl(1),
    slug: new FormControl('slug'),
    summary: new FormControl('test summary'),
    type: new FormControl(1),
    sku: new FormControl('test sku'),
    quantity: new FormControl(0),
    content: new FormControl(''),
    imageUrl: new FormControl(''),
    createdAt: new FormControl(new Date().toISOString()),
    updatedAt: new FormControl(new Date().toISOString()),
    publishedAt: new FormControl(new Date().toISOString()),
    startsAt: new FormControl(new Date().toISOString()),
    endsAt: new FormControl(new Date().toISOString()),
    active: new FormControl(1),
  });
  constructor(private dialogRef: NbDialogRef<AddDialogComponent>) {}

  ngOnInit(): void {}

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close(this.AddDialog.value);
  }

  //show image when input have value
  onChangeImg() {
    this.imgURL = this.AddDialog.value.imageUrl;
  }
}
