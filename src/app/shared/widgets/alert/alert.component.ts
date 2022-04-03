import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {

  readonly typeClasses: any = {
    error: {
      class: 'alert-danger',
      icon: '../../../../assets/icons/exclamation-triangle-fill.svg'
    },
    info: {
      class: 'alert-info',
      icon: '../../../../assets/icons/info-circle-fill.svg'
    },
    success: {
      class: 'alert-success',
      icon: '../../../../assets/icons/check-circle-fill.svg'
    },
    warning: {
      class: 'alert-warning',
      icon: '../../../../assets/icons/exclamation-triangle-fill.svg'
    }
  };

  readonly defaultMessage = 'Houve um erro inesperado, tente novamente'

  @Input() type = 'info';

  @Input() isDismissible = true;

  @Input() message: string = this.defaultMessage;

  @Input() isClosed: boolean = true;

  classes: string[] = [];

  constructor() {}

  ngOnInit(): void { 
    const typeClass = this.typeClasses[this.type].class;
    this.classes.push(typeClass);
    if (this.isDismissible)
      this.classes.push('alert-dismissible');
  }

  showAlert() {
    this.isClosed = false;
  }

  onClose() {
    this.isClosed = true;
  }

}
