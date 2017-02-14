import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'navigation-item',
    templateUrl: 'navigationitem.component.html'
})
export class NavigationItemComponent {
    label: string;
    url: string;
    isCurrent: boolean;
}