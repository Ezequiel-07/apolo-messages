import { Component, OnInit } from '@angular/core';
import { AuthDataService } from 'src/app/interceptor/auth-data/auth-data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user:any = {status: false};

  constructor(private service: AuthDataService) {}

  ngOnInit(): void {
  }


  valueError = this.service.auth_data.asObservable().subscribe(
    data => {
      this.user = data;
    }
  );
}
