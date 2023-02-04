import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { AsideComponent } from './aside/aside.component';
import { RouterModule } from '@angular/router';
import { PagesModule } from './feature/pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { ThemesComponent } from './feature/themes/themes.component';
import { ThemesRoutingModule } from './feature/themes-routing.module';
import { SharedModule } from './shared/shared.module';
import { ThemeListItemComponent } from './theme-list/theme-list-item/theme-list-item.component';
import { ThemesDetailComponent } from './feature/themes/themes-detail/themes-detail.component';
import { ThemesNewPageComponent } from './feature/themes/themes-new-page/themes-new-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThemeListComponent,
    AsideComponent,
    ThemesComponent,
    ThemeListItemComponent,
    ThemesDetailComponent,
    ThemesNewPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    PagesModule,
    AuthModule,
    ThemesRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
