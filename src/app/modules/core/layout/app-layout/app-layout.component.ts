import { Component } from '@angular/core';
import { LayoutRoutingModule } from '../layout-routing.module';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  providers: [MessageService]
})
export class AppLayoutComponent {

}
