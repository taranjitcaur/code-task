import { WelcomeMsgComponent } from './src/components/welcome-msg/welcome-msg.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './src/components/all-posts/all-posts.component';
import { CreatePostsComponent } from './src/components/create-posts/create-posts.component';

const routes: Routes = [
  { path: '', component: WelcomeMsgComponent },
  { path: 'all-posts', component: AllPostsComponent },
  {path: 'create-post', component: CreatePostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 