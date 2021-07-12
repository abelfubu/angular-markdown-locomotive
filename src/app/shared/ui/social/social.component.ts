import { Component, NgModule } from '@angular/core'

@Component({
  selector: 'md-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent {}

@NgModule({
  declarations: [SocialComponent],
  exports: [SocialComponent],
})
export class SocialModule {}
