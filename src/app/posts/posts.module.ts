import { NgModule } from '@angular/core';

import { PostCreateComponent } from './post-create/post-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [PostListComponent, PostCreateComponent],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    CommonModule,
  ],
})
export class PostsModule {}
