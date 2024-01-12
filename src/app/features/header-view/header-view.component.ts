import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-header-view',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './header-view.component.html',
  styleUrl: './header-view.component.scss'
})
export class HeaderViewComponent {

}
