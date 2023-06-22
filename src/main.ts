import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';


registerLicense('ORg4AjUWIQA/Gnt2VFhiQlJPcUBDX3xLflF1VWFTfF56dFxWACFaRnZdQV1lS35RdURkWHZddX1X');




platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
