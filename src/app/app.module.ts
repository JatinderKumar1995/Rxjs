import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './promise/promise.component';
import { Logger } from './services/logger.service';
import { PromiseService } from './services/promise-service';
import { HttpWrapperService } from './services/http-wrapper-service';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { ObservableComponent } from './components/observable/observable.component';
import { RxjsConceptListComponent } from './components/observable/rxjs-concept-list/rxjs-concept-list.component';
import { FormEventComponent } from './components/observable/form-event/form-event.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    RxjsConceptListComponent,
    FormEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, // for registering bootstrap modules
    HttpClientModule, // No provider for HttpClient!
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true })
  ],
  providers: [Logger,PromiseService,HttpWrapperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
