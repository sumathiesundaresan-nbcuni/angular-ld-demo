import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderManagerComponent } from './order-manager/order-manager.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { LaunchDarklyService } from './launch-darkly-service';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderHeaderComponent } from './order-header/order-header.component';
import { OrderItemsComponent } from './order-items/order-items.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderManagerComponent,
    OrderDetailsComponent,
    OrderDetailsComponent,
    OrderListComponent,
    OrderHeaderComponent,
    OrderItemsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [LaunchDarklyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
