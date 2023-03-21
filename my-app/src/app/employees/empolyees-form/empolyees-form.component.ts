import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/employee.modal';
import { EmployeesService } from 'src/app/shared/employees.service';


@Component({
  selector: 'app-empolyees-form',
  templateUrl: './empolyees-form.component.html',
  styleUrls: ['./empolyees-form.component.css']
})
export class EmpolyeesFormComponent {
  constructor(public service: EmployeesService, private toastr: ToastrService) { }

  submited = false;
  onSubmit() {
    this.submited = true;
    if (this.service.empoyeeForm.valid) {
      debugger;
      if (this.service.empoyeeForm.get('_id')?.value == '')
        this.service.postemployees().subscribe(res => {
          this.service.fecthData();
          this.toastr.success('Created successfully', 'Employee Register')
          this.resetForm();
        })
        else
        this.service.putemployees().subscribe(res => {
          this.service.fecthData();
          this.toastr.info('Updated successfully', 'Employee Register')
          this.resetForm();
        })
    }
  }


  resetForm() {
    this.service.empoyeeForm.reset(new Employee());
    this.submited = false;
  }
}

