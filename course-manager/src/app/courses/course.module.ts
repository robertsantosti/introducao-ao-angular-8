import { NgModule } from "@angular/core";
import { CourseListComponent } from "./course-list.component";
import { CourseInfoComponent } from "./course-info.component";
import { RouterModule } from "@angular/router";
import { ReplacePipe } from "../pipe/replace.pipe";
import { CommonModule } from "@angular/common";
import { StarComponent } from "../star/star.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
    ReplacePipe,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: "courses",
        component: CourseListComponent
      },
      {
        path: "courses/info/:id",
        component: CourseInfoComponent
      }
    ])
  ]
})
export class CourseModule {}
