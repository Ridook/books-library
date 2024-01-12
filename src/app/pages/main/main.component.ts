import { Component } from '@angular/core';
import { HeaderViewComponent } from '../../features/header-view/header-view.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderViewComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
