import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SymbolPaletteModule, DiagramModule, DiagramContextMenuService  } from '@syncfusion/ej2-angular-diagrams';
import { RelationaldiagramComponent } from './pages/relationaldiagram/relationaldiagram/relationaldiagram.component';
import { RoomComponent } from './pages/room/room/room.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  declarations: [
    AppComponent,
    RelationaldiagramComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DiagramModule,
    SymbolPaletteModule,
    ButtonModule
  ],
  providers: [DiagramContextMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
