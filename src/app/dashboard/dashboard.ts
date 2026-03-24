import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Student, StudentService } from '../services/student.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  students: Student[] = [];
  loading = true;
  errorMessage = '';

  constructor(private readonly studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe({
      next: (data) => {
        this.students = data;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to fetch student data. Please try again later.';
        this.loading = false;
      },
    });
  }
}
