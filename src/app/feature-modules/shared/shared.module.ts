import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnersTestComponent } from './components/learners-test/learners-test.component';
import { LearnersTestService } from './services/heavy-vehicle.service';

@NgModule({
  declarations: [LearnersTestComponent],
  imports: [CommonModule],
  providers: [LearnersTestService],
  exports: [LearnersTestComponent],
})
export class SharedModule {}
