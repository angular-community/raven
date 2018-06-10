import * as Raven from 'raven-js';
import { InjectionToken } from "@angular/core";

export const RAVEN_DSN = new InjectionToken<string>('raven.dsn');
export const RAVEN_OPTIONS = new InjectionToken<Raven.RavenOptions>('raven.options');
