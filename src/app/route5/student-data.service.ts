import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { studentData } from 'src/models/studentData';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {

  }
  getStudentData() {
   return this.http.get<studentData[]>("assets/JSON/studentJsonData.json");

  }
}
