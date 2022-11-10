import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NavigatorComponent } from './navigator/navigator.component';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
	{ path: '', component: ListComponent },
	{ path: 'navigator', component: NavigatorComponent },

]

@NgModule({
	declarations: [
		AppComponent,
		NavigatorComponent,
		ListComponent,
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }