import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './item/item-list.component';
import { CreateItemComponent } from './item/create-item.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ItemService } from './item/item.service';

const appRoutes: Routes = [
  {
    path: 'items',
    component: ItemListComponent
  },
  {
    path: 'create-item',
    component: CreateItemComponent
  },
  { path: '', component: ItemListComponent },
  { path: '**', component: ItemListComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    CreateItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
