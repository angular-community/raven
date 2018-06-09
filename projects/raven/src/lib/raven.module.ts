import { NgModule, APP_INITIALIZER, ModuleWithProviders, ErrorHandler } from '@angular/core';
import * as Raven from 'raven-js';

import { RavenErrorHandler } from './raven-error.handler';
import { RavenService } from './raven.service';
@NgModule({})
export class RavenModule {
  static forRoot(dsn: string, options?: Raven.RavenOptions): ModuleWithProviders {
    return {
      ngModule: RavenModule,
      providers: [
        RavenService,
        {
          provide: APP_INITIALIZER,
          useFactory: () => {
            return Raven.config(dsn, options).install();
          },
          multi: true
        },
        { provide: ErrorHandler, useClass: RavenErrorHandler }
      ]
    };
  }
}
