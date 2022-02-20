import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-loading',
  templateUrl: './button-loading.component.html'
})
export class ButtonLoadingComponent {

  /**
   * Defines the classes to style the button.
   * The classes must be separated by spaces.
   */
  @Input() classes!: string;

  /**
   * Defines if button is loading. When button is loading, the spinner is shown and button is disabled.
   */
  @Input() isLoading = false;

  @Input() disabled = false;

}
