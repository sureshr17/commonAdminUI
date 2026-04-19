import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Student, StudentService } from '../services/student.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  /** Signals keep the view in sync when HttpClient completes (zoneless app has no Zone.js). */
  readonly students = signal<Student[]>([]);
  readonly loading = signal(true);
  readonly errorMessage = signal('');

  constructor(private readonly studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe({
      next: (data) => {
        this.students.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set('Unable to fetch student data. Please try again later.');
        this.loading.set(false);
      },
    });
  }
}
