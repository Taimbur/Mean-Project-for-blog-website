import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';
import { Employee } from '../shared/employee.modal';
import { EmployeesService } from '../shared/employees.service';


@Component({
  selector: 'app-emplyoees',
  templateUrl: './emplyoees.component.html',
  styleUrls: ['./emplyoees.component.css']
})
export class EmplyoeesComponent implements OnInit {
  constructor(public service: EmployeesService,private toastr: ToastrService) { }
  ngOnInit(): void {

    this.service.fecthData()

  }

  populateForm(selectedRecord: Employee) {
    this.service.empoyeeForm.setValue({
      _id: selectedRecord._id,
      FullName: selectedRecord.FullName,
      // Location: selectedRecord.Location,
      // Position: selectedRecord.Position,
      // Salary: selectedRecord.Salary,
      Email: selectedRecord.Email,
      Phone: selectedRecord.Phone,
      Feedback:selectedRecord.Feedback
    })
  }

  ondel(_id:string){
    if (confirm('are you sure ?')) {
      this.service.deleteemployees(_id).subscribe(res=>{
        this.service.fecthData()
        this.toastr.error('list updated','user has been deleted succesfully')

      })
    }
  }

  handleError(): any {
    throw new Error('Method not implemented.');
  }


}
