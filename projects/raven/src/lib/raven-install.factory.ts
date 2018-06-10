import * as Raven from 'raven-js';

export function ravenInstallFactory(dsn: string, options?: Raven.RavenOptions) {
  return () => {
    Raven.config(dsn, options).install();
  }
}
