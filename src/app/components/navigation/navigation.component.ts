import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { NavigationLinkModel } from '../../models/navigation-link.model';

@Component({
  selector: 'app-navigation',
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  imports: [
    RouterLink, RouterLinkActive
  ],
})
export default class NavigationComponent {

  navigationLinks: ReadonlyArray<NavigationLinkModel> = [
    {
      link: '/if',
      text: 'If'
    },
    {
      link: '/for',
      text: 'For',
    },
    {
      link: '/defer',
      text: 'Defer'
    },
    {
      link: '/examples',
      text: 'Examples'
    }
  ];

}