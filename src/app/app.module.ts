import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TextInputDialogComponent } from './components/shared-dialogs/dialogs/text-input-dialog.component';
import { SharedModule } from './modules/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        HomeComponent,
        NotFoundComponent,
        TextInputDialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        SharedModule.forRoot({ minLogLevel: environment.minLogLevel })
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
