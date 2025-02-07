import { Component, EventEmitter, Output } from '@angular/core';
import { SelectedThemeName, ThemeSwitchService } from '../../modules/shared/services/theme-switch.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    standalone: false
})
export class ToolbarComponent {
    @Output() toggleSidenav = new EventEmitter();

    constructor(private _theme: ThemeSwitchService) {}

    public handleSetTheme(theme: SelectedThemeName) {
        this._theme.change(theme);
    }
}
