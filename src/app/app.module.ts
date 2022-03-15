import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormFieldErrorsComponent } from 'src/app/controls/form-field-errors/form-field-errors.component'
import { NavigationComponent } from 'src/app/controls/navigation/navigation.component'
import { FormService } from 'src/app/services/form-service.service'
import { SvgIconModule } from 'src/app/shared/svg-icon/svg-icon.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormFooterComponent } from './controls/form-footer/form-footer.component'
import { FormSectionComponent } from './controls/form-section/form-section.component'
import { NavigationLinkComponent } from './controls/navigation-link/navigation-link.component'
import { PageHeaderComponent } from './controls/page-header/page-header.component'
import { TabControlComponent } from './controls/tab-control/tab-control.component'
import { TabComponent } from './controls/tab/tab.component'
import { DockerRunPageComponent } from './pages/docker-run-page/docker-run-page.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { UrlAnalyzerPageComponent } from './pages/url-analyzer-page/url-analyzer-page.component'

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        NavigationLinkComponent,
        HomePageComponent,
        UrlAnalyzerPageComponent,
        DockerRunPageComponent,
        PageHeaderComponent,
        FormFieldErrorsComponent,
        FormFooterComponent,
        TabComponent,
        TabControlComponent,
        FormSectionComponent
    ],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, ReactiveFormsModule, SvgIconModule],
    providers: [FormService],
    bootstrap: [AppComponent]
})
export class AppModule {}
