import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// Platform browser is a function allows us to compile our code in the browser
// To bootstrap our application we need to tell angular where to start
import { AppModule } from './app/app.module';

// Through function we need to pass AppModule
platformBrowserDynamic().bootstrapModule(AppModule);
