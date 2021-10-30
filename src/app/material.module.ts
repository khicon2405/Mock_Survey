import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  exports: [MatInputModule,MatDialogModule],
})
export class MaterialModule {}
