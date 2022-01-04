import { Component, OnInit } from '@angular/core';
import { studentData } from 'src/models/studentData';
import { StudentDataService } from './student-data.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { studentList } from 'src/mock-objects/student-array';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.css']
})
export class Route5Component implements OnInit {
  displayedColumns : string[] =[];
  studentInfo: studentData[] = [];
  dataSource = new MatTableDataSource(this.studentInfo);
  counterName : number = 0;
  counterClass : number = 0;
  counterSection : number = 0;
  counterMaths  : number = 0;
  counterScience : number = 0;
  counterPhysics : number = 0;
  loading : boolean = true;
  @ViewChild(MatSort) sort: any ;

  constructor( private studentData : StudentDataService,private _liveAnnouncer: LiveAnnouncer) { 
    this.dataSource.sort = this.sort;

  }

  ngOnInit(): void {
    this.studentData.getStudentData().subscribe((data)=>{
      this.studentInfo = data;
      this.displayedColumns = Object.keys(this.studentInfo[0]);
    })


  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.studentInfo);
       this.dataSource.sort = this.sort;
       this.loading = false;
     }, 1000);
  }

  announceSortChange(sortState: Sort) { // angular- mat - table
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  getCategoryData(i : any){
    const intialStudentInfo : studentData[] = studentList;

    switch(this.displayedColumns[i]) { 
      case "Name": { 
        this.counterName++;
        if(this.counterName == 1){
          this.studentInfo.sort((a,b) => a.Name.localeCompare(b.Name));
        }else if(this.counterName == 2){
          this.studentInfo.sort((a,b) => b.Name.localeCompare(a.Name));  
        }else{
          this.studentInfo = JSON.parse(JSON.stringify(intialStudentInfo)); // Deep copy
          this.counterName = 0;
        }
         break; 
      } 
      case "Class": { 
        this.counterClass++;
        if(this.counterClass == 1){
          this.studentInfo.sort((a,b) => a.Class- b.Class);
        }else if(this.counterClass == 2){
          this.studentInfo.sort((a,b) => b.Class- a.Class);  
        }else{
          this.studentInfo = JSON.parse(JSON.stringify(intialStudentInfo)); // Deep copy
          this.counterClass = 0;
        }
         break; 
      } 
      case "Section": { 
        this.counterSection++;
        if(this.counterSection == 1){
          this.studentInfo.sort((a,b) => a.Section.localeCompare(b.Section));
        }else if(this.counterSection == 2){
          this.studentInfo.sort((a,b) => b.Section.localeCompare(a.Section));  
        }else{
          this.studentInfo = JSON.parse(JSON.stringify(intialStudentInfo)); // Deep copy
          this.counterSection = 0;
        }
         break; 
      }
      case "Maths": { 
        this.counterMaths++;
        if(this.counterMaths == 1){
          this.studentInfo.sort((a,b) => a.Maths- b.Maths);
        }else if(this.counterMaths == 2){
          this.studentInfo.sort((a,b) => b.Maths- a.Maths);  
        }else{
          this.studentInfo = JSON.parse(JSON.stringify(intialStudentInfo)); // Deep copy
          this.counterMaths = 0;
        }
         break; 
      }
      case "Science": { 
        this.counterScience++;
        if(this.counterScience == 1){
          this.studentInfo.sort((a,b) => a.Science- b.Science);
        }else if(this.counterScience == 2){
          this.studentInfo.sort((a,b) => b.Science- a.Science);  
        }else{   
          this.studentInfo = JSON.parse(JSON.stringify(intialStudentInfo)); // Deep copy
          this.counterScience = 0;
        }
         break; 
      } 
      case "Physics": { 
        this.counterPhysics++;
        if(this.counterPhysics == 1){
          this.studentInfo.sort((a,b) => a.Physics- b.Physics);
        }else if(this.counterPhysics == 2){
          this.studentInfo.sort((a,b) => b.Physics- a.Physics);  
        }else{
          this.studentInfo = JSON.parse(JSON.stringify(intialStudentInfo)); // Deep copy
          this.counterPhysics = 0;
        }
         break; 
      }  

      } 

  }

}
