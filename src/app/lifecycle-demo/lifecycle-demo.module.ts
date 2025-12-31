// Module that groups the lifecycle demo components and their shared `DataService`.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentLifecycleComponent } from './parent-lifecycle.component';
import { ChildLifecycleComponent } from './child-lifecycle.component';
import { DataService } from './data.service';

@NgModule({
  imports: [CommonModule, ParentLifecycleComponent, ChildLifecycleComponent],
  providers: [DataService],
  exports: [ParentLifecycleComponent]
})
export class LifecycleDemoModule {}
