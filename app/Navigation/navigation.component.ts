import { Component} from '@angular/core';
import { NavigationItem } from './navigationItem';

@Component({
    moduleId: module.id,
    selector: 'navigation',
    templateUrl: 'navigation.component.html'
})
export class NavigationComponent {
    navigationItems: Array<NavigationItem>;
    
    constructor() {
        this.navigationItems = this.getNavigationItems();
    }

    getNavigationItems() : Array<NavigationItem>{
        var home = new NavigationItem('Home', '#', true);
        var about = new NavigationItem('About', '#', false)
        return [home, about];
    }
}