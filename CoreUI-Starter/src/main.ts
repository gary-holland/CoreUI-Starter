///<reference path="typings.d.ts"/>

import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

import 'bootstrap';

// Enable either Hot Module Reloading or production mode
if (module['hot']) {
    module['hot'].accept();
    module['hot'].dispose(() => { platform.destroy(); });
} else {
    enableProdMode();
}

var platform = platformBrowserDynamic()
platform.bootstrapModule(AppModule);
