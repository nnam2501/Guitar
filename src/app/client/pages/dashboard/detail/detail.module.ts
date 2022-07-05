import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { NbButtonModule, NbCardModule, NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    DetailRoutingModule,
    MatCardModule,
    NbCardModule,
    NbButtonModule,
    NbLayoutModule,
  ],
})
export class DetailModule {}
