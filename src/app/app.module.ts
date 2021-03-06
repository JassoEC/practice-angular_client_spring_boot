import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectiveComponent } from './directive/directive.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientService } from './clients/client.service';
import { Route, RouterModule } from '@angular/router';
import { FormComponent } from './clients/form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Route[] = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'directives', component: DirectiveComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/create', component: FormComponent },
  { path: 'clients/update/:id', component: FormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectiveComponent,
    ClientsComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [ClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
