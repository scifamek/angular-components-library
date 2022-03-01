import { Component, OnInit } from '@angular/core';
import { AdComponent } from 'src/app/components/ad-component';

@Component({
  selector: 'app-button-example',
  templateUrl: './button-example.component.html',
  styleUrls: ['./button-example.component.scss'],
})
export class ButtonExampleComponent extends AdComponent implements OnInit {
  colors = [
    'primary',
    'secondary',
    'tertiary',
    'warning',
    'alert',
    'danger',
    'info',
    'notification',
  ];

  sizes = ['small', 'medium', 'large'];

  kinds = ['fill', 'outline'];

  background = 'light';
  constructor() {
    super();
  }

  changeBg() {
    if (this.background == 'dark') {
      this.background = 'light';
    } else {
      this.background = 'dark';
    }
  }
  ngOnInit(): void {}
}
