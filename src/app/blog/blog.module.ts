import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '@ui/button/button.component';
import { CardModule } from '@ui/card/card.component';
import { SubstringPipeModule } from 'app/shared/pipes/substring.pipe';
import { NgxMdModule } from 'ngx-md';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [BlogComponent, PostComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    NgxMdModule,
    CardModule,
    SubstringPipeModule,
    ButtonModule,
  ],
})
export class BlogModule {}
