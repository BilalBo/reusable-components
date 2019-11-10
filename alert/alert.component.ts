import { Component } from '@angular/core';
import { Alert, AlertType } from './alert.model';
import { AlertService } from './alert.service';
import { Subscription } from 'rxjs';

@Component({selector: 'alert', templateUrl: 'alert.component.html', styleUrls: ['alert.component.css']})
export class AlertComponent {
  alert: Alert = null;
  subscription: Subscription;

  constructor(private alertService: AlertService) {
    this.subscription = this.alertService.onAlert()
      .subscribe(alert => {
        this.alert = alert;
        setTimeout(() => this.removeAlert(), 6000);
      });
  }

  removeAlert() {
    this.alert = null;
  }

  cssClass(alert: Alert) {
    if (!alert) {
      return;
    }

    switch (alert.type) {
      case AlertType.Success:
        return 'alert alert-success';
      case AlertType.Error:
        return 'alert alert-danger';
      case AlertType.Info:
        return 'alert alert-info';
      case AlertType.Warning:
        return 'alert alert-warning';
    }
  }
}
