import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEventComponent } from './components/observable/form-event/form-event.component';
import { ObservableComponent } from './components/observable/observable.component';
import { RxjsConceptListComponent } from './components/observable/rxjs-concept-list/rxjs-concept-list.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  { path: 'observable', component: ObservableComponent,children:[
    {path:'',component:RxjsConceptListComponent},
    {path:'form-Event',component:FormEventComponent}
  ] },
  { path: '', redirectTo: 'observable',pathMatch:'full' },  // Invalid configuration of route '{path: "", redirectTo: "promise"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
