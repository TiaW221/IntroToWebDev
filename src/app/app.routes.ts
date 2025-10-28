import { Routes,  } from '@angular/router';
import {Homepage} from './Pages/homepage/homepage';
import {Page2} from './Pages/page2/page2';
import {Page3} from './Pages/page3/page3';

export const routes: Routes = [
  // This is the base page, takes you to the homepage, it's why it has nothing else in the url.
  { path: '',
    component: Homepage,
  },
  { path: 'games',
  component: Page2,
  },
  { path: 'holidays',
    component: Page3,
  },

];
