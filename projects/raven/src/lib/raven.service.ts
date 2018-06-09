import { Injectable } from '@angular/core';
import * as Raven from 'raven-js';
@Injectable({
  providedIn: 'root'
})
export class RavenService {
  public getInstance() {
    return Raven;
  }
}
