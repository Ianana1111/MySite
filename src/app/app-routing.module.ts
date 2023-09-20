import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { appPath } from './app-path.const'

const routes: Routes = [
    {
      path: appPath.home,
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
      path: appPath.about,
      loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
    },
    {
      path: appPath.tags,
      loadChildren: () => import('./tags/tags.module').then(m => m.TagsModule)
    },
    {
      path: appPath.files,
      loadChildren: () => import('./files/files.module').then(m => m.FilesModule)
    },
    {
      path: appPath.catog,
      loadChildren: () => import('./catog/catog.module').then(m => m.CatogModule)
    },
    {
      path: appPath.find,
      loadChildren: () => import('./find/find.module').then(m => m.FindModule)
    },
    {
      path: appPath.products,
      loadChildren: () => import('./product-section/product-section.module').then(m => m.ProductSectionModule)
    },
    {
      path: appPath.login,
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
      path: appPath.cart,
      loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
    },
    {
      path: appPath.checkout,
      loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)
    },
    {
      path: appPath.success,
      loadChildren: () => import('./success/success.module').then(m => m.SuccessModule)
    },
    {
      path: '**',
      redirectTo: appPath.home,
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }