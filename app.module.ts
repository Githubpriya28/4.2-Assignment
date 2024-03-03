import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';
import { QueryComponent } from './query/query.component';

const appRoutes: Routes = [
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'update-player', component: UpdatePlayerComponent },
  { path: 'delete-player', component: DeletePlayerComponent },
  { path: 'query', component: QueryComponent },
  { path: '', redirectTo: '/add-player', pathMatch: 'full' }, // Default route
];

@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    UpdatePlayerComponent,
    DeletePlayerComponent,
    QueryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // For debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
