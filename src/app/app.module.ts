import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SummaryComponent } from './summary/summary.component';


const routes: Routes = [
	{ path: '', component: SummaryComponent },
	{ path: 'navigator', component: ListComponent },
]

@NgModule({
	declarations: [
		AppComponent,
		ListComponent,
		SummaryComponent,
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }