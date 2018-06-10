import { NgModule, APP_INITIALIZER, ModuleWithProviders, ErrorHandler } from '@angular/core';
import * as Raven from 'raven-js';

import { RavenErrorHandler } from './raven-error.handler';
import { RavenService } from './raven.service';
import { ravenInstallFactory } from './raven-install.factory';
import { RAVEN_DSN, RAVEN_OPTIONS } from './tokens';

@NgModule()
export class RavenModule {
  static forRoot(dsn: string, options?: Raven.RavenOptions): ModuleWithProviders {
    return {
      ngModule: RavenModule,
      providers: [
        RavenService,
        {
          provide: RAVEN_DSN,
          useValue: dsn
        },
        {
          provide: RAVEN_OPTIONS,
          useValue: options
        },
        {
          provide: APP_INITIALIZER,
          useFactory: ravenInstallFactory,
          deps: [RAVEN_DSN, RAVEN_OPTIONS],
          multi: true
        },
        { provide: ErrorHandler, useClass: RavenErrorHandler }
      ]
    };
  }
}
