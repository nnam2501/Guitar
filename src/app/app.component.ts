import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './shared/animations/router-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // trigger('routerAnimations', [
    //   transition('* <=> *', [
    //     query(':enter', [style({ opacity: 0 })], { optional: false }),
    //     query(
    //       ':leave',
    //       [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
    //       { optional: true }
    //     ),
    //     query(
    //       ':enter',
    //       [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
    //       { optional: true }
    //     ),
    //   ]),
    // ]),
    slider,
  ],
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
  title = 'guitar';
}
