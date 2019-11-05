import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'ngx-moment';
import { FooterComponent } from './footer';
import { PageComponent } from './page';
import { PageNotFoundComponent } from './page-not-found';

@NgModule({
    declarations: [
        FooterComponent,
        PageComponent,
        PageNotFoundComponent
    ],
    entryComponents: [
        PageNotFoundComponent
    ],
    exports: [
        FooterComponent,
        PageComponent,
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        MomentModule,
        RouterModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule {}
