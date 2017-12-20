import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './components/shared/shared.module';
import { ManageUsersModule, MANAGE_USERS_ROUTES } from './components/manage-users/manage-users.module';
import { StudioModule, STUDIO_ROUTES } from './components/studio/studio.module';

const APP_ROUTES: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: "full" },
	{
		path: 'manage-users',
		children: MANAGE_USERS_ROUTES
	},
	{
		path: 'studio',
		children: STUDIO_ROUTES
	},
	{ path: 'home', component: HomeComponent },
	{ path: '**', redirectTo: 'home' }
];

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent 
	],
	imports: [
		SharedModule,
		ManageUsersModule,
		StudioModule,
		RouterModule.forRoot(APP_ROUTES, {
			useHash: true
		})
	],
	bootstrap: [AppComponent]	
})
export class AppModule { }
