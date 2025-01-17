import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportComponent } from './import/import.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ListModule } from '../../modules/list/list.module';
import { CoreModule } from '../../core/core.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ItemIconModule } from '../../modules/item-icon/item-icon.module';
import { PipesModule } from '../../pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { ProgressPopupModule } from '../../modules/progress-popup/progress-popup.module';
import { ListPickerModule } from '../../modules/list-picker/list-picker.module';
import { MaintenanceGuard } from '../maintenance/maintenance.guard';
import { VersionLockGuard } from '../version-lock/version-lock.guard';
import { HttpClientModule } from '@angular/common/http';

import { NzRadioModule } from 'ng-zorro-antd/radio';

const routes: Routes = [
  {
    path: ':importString',
    component: ImportComponent,
    canActivate: [MaintenanceGuard, VersionLockGuard]
  }
];

@NgModule({
    imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    RouterModule.forChild(routes),
    TranslateModule,
    ListModule,
    NzRadioModule,
    FlexLayoutModule,
    ItemIconModule,
    PipesModule,
    ProgressPopupModule,
    ListPickerModule,
    HttpClientModule,
    ImportComponent
]
})
export class ImportModule {
}
