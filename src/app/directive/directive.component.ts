import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
})
export class DirectiveComponent {
  list: string[] = ['Js', 'Ts', 'Java EE', 'Java SE', 'PHP', ' C#'];
  showCourses: boolean = true;

  changeVisibility(): void {
    this.showCourses = !this.showCourses;
  }
}
