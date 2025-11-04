import { Routes,  } from '@angular/router';
import {Homepage} from './Pages/homepage/homepage';
import {Page2} from './Pages/page2/page2';
import {Page3} from './Pages/page3/page3';
import {MattPage} from './Pages/matt-page/matt-page';
import {RhysExample2} from './rhys-example2/rhys-example2';

export const routes: Routes = [
  // This is the base page, takes you to the homepage, it's why it has nothing else in the url.
  { path: '',
    component: Homepage,
    title: 'Home',
  },
  { path: 'games',
  component: Page2,
    title: 'Games',
  },
  { path: 'holidays',
    component: Page3,
    title: 'Holidays',
  },
  {path: 'Matt Page',
  component: MattPage,
  title: 'Matt Page'
  },
  {path: 'RhysExample2',
  component: RhysExample2,
  title: 'RhysExample2'}
];
