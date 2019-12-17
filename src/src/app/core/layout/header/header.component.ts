import { Component, Input } from '@angular/core';

@Component({
    selector: 'crx-header',
    styleUrls: ['./header.less'],
    templateUrl: './header.html'
})
export class HeaderComponent {

    @Input() pageTitle = '';

}
