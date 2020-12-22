import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from 'src/shared/models/employees.model';
import { SampleApiService } from 'src/shared/services/sample-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'Angular-demo';
  lastName = 'Demo';
  employee: Employee;
  error: string;
  private subscriptions = new Subscription();
  loading: boolean = false;

  constructor(private sampleApiService: SampleApiService) {}

  onClick() {
    this.loading = true;
    setTimeout(() => {
      this.subscriptions.add(
        this.sampleApiService.getEmployee().subscribe(
          data => {
            this.error = undefined;
            this.employee = data;
            this.loading = false;
            console.log('res: ', data, this.employee);
          },
          err => {
            this.employee = undefined;
            this.error = err;
            this.loading = false;
            console.log('error', err)
          })
      );
    }, 500)
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}

