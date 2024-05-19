import { Component, OnInit } from '@angular/core';
import { WarrantyService } from '../../services/warranty.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  upcomingWarranties: any[] = [];
  constructor(private warrantyService: WarrantyService) { }
  ngOnInit(): void {
    this.warrantyService.getUpcomingWarranties().subscribe(data => {
      this.upcomingWarranties = data;
    });
  }
}
