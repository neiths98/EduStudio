import { animate, style, transition, trigger } from '@angular/animations';

export const FadeSlideInOut = 
  trigger('fadeSlideInOut', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(10px)' }),
      animate('350ms', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
    transition(':leave', [
      animate('350ms', style({ opacity: 0, transform: 'translateY(5px)' })),
    ]),
  ]);