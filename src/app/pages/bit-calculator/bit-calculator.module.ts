import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../../modules/shared/shared.module';
import { BitCalculatorComponent } from './bit-calculator.component';

const routes: Route[] = [
    {
        path: '',
        component: BitCalculatorComponent
    }
];

@NgModule({
    declarations: [BitCalculatorComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class BitCalculatorModule {
}
