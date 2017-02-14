import { Component } from '@angular/core';
import { NavigationItem } from './navigationItem';

@Component({
    moduleId: module.id,
    selector: 'navigation',
    templateUrl: 'navigation.component.html'
})
export class NavigationComponent {
    navigationItems: Array<NavigationItem>;
}