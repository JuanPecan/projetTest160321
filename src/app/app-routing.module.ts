import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const productModule = () => import('./products/products.module').then(x => x.ProductsModule);

const routes: Routes = [
  // NOT LAZY LOAD => { path: '', component: HomeComponent },
  { path: 'products', loadChildren: productModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
