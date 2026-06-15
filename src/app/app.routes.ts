import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Sermons } from './components/sermons/sermons';
import { Ministries } from './components/ministries/ministries';
import { ActiveChurches } from './components/active-churches/active-churches';
import { Events } from './components/events/events';
import { Donations } from './components/donations/donations';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'sermons', component: Sermons },
  { path: 'ministries', component: Ministries },
  { path: 'active-churches', component: ActiveChurches },
  { path: 'events', component: Events },
  { path: 'donations', component: Donations },
  { path: 'contact', component: Contact },
];
