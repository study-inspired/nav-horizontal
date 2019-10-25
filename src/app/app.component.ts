import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template:
            `
		<div class="container">
			<div class="flex-col list-nav" appNavVertical>
				<ng-container *ngFor="let item of listMenu">
					<div class="nav-item" routerLinkActive="active">
						<a class="label" [routerLink]="item.url">{{item.label}}</a>
					</div>
				</ng-container>
			</div>
		</div>
		<router-outlet></router-outlet>

    `,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent
{
    title = 'nav-horizontal';

    listMenu: { label: string, url: string; }[] = [
        {label: 'Home', url: 'home'},
        {label: 'About', url: 'about'},
        {label: 'Contact', url: 'contact'},
    ];
}
