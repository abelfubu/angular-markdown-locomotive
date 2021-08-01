import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { NgxMdModule } from 'ngx-md';
import { CardModule } from '@ui/card/card.component';

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, BlogRoutingModule, NgxMdModule, CardModule],
})
export class BlogModule {}
