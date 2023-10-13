import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0 })),
      transition('in => out', animate(700)),
      transition('out => in', animate(1000))
    ])
  ]
})
export class CreateComponent implements OnInit {
  showPopup: boolean = true;

  closePopup() {
    this.showPopup = false;
  }

  ngOnInit() {
    // You can trigger the fadeIn animation here if needed
  }
}
