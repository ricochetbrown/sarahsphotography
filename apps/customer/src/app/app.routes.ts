import { Route } from '@angular/router';
import {GalleryComponent} from "./gallery/gallery.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

export const appRoutes: Route[] = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gallery', component: GalleryComponent }
];
