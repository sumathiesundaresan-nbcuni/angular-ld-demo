import { Component, Input } from '@angular/core';

@Component({
  selector: 'order-header',
  templateUrl: './order-header.component.html'
})
export class OrderHeaderComponent {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('customerName') customer = '';
}
