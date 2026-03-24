import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface Student {
  id: number;
  name: string;
  email: string;
  city: string;
  company: string;
}

interface UserApiResponse {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private readonly http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<UserApiResponse[]>(this.apiUrl).pipe(
      map((users) =>
        users.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          city: user.address.city,
          company: user.company.name,
        })),
      ),
    );
  }
}
