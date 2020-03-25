import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  project: [];
  constructor(private _formBuilder: FormBuilder) { }
  // projects: project[] = [
  //   {
  //     value: 'Dev', viewValue: 'Dev-Logger',
  //     value: 'Task', viewValue: 'Task Scheduler',
  //     value: 'Messaging', viewValue: 'Messanger'
  //   }
  // ]
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
