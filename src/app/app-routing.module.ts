import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent }  from './app.component';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
}
)
export class AppRoutingModule { }
