import { Component, Input, OnInit } from '@angular/core';

import { Order } from '../api-types';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
})
export class OrderDetailsComponent implements OnInit {
  ngOnInit(): void {}
  @Input() details: Order | undefined;
}
