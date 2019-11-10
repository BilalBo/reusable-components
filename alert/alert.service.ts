import { Alert, AlertType } from './alert.model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlertService {
  private subject = new Subject<Alert>();

  onAlert(): Observable<Alert> {
    return this.subject.asObservable();
  }

  success(message: string) {
    this.alert(new Alert( message, AlertType.Success ));
  }

  error(message: string) {
    this.alert(new Alert( message, AlertType.Error ));
  }

  info(message: string) {
    this.alert(new Alert( message, AlertType.Info ));
  }

  warning(message: string) {
    this.alert(new Alert( message, AlertType.Warning ));
  }

  protected alert(alert: Alert) {
    this.subject.next(alert);
  }
}
