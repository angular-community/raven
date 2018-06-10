# Raven library for Angular

## Installation

```bash
npm i @angular-community/raven 
```
or

```bash
yarn add @angular-community/raven 
```
### Configuration

```typescript
// [your-app-path]/src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RavenModule } from '@angular-community/raven';

import { AppComponent } from './app.component';

// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RavenModule.forRoot('{{ DSN }}', options)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
