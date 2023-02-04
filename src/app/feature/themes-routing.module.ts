import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth.guard';
import { ThemesDetailComponent } from './themes/themes-detail/themes-detail.component';
import { ThemesNewPageComponent } from './themes/themes-new-page/themes-new-page.component';
import { ThemesComponent } from './themes/themes.component';

const routes: Routes = [
  {
    path: 'themes',
    component: ThemesComponent,
  },
  {
    path: 'themes/new',
    canActivate: [AuthGuard],
    component: ThemesNewPageComponent,
  },
  {
    path: 'themes/:themeId',
    component: ThemesDetailComponent,
  },
];

export const ThemesRoutingModule = RouterModule.forChild(routes);
