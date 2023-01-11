import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { ApexDataLabels, ApexFill, ApexLegend, ApexPlotOptions, ApexTitleSubtitle, ApexYAxis, ChartComponent } from "ng-apexcharts";
import {ApexNonAxisChartSeries,ApexChart} from "ng-apexcharts";
import {ApexAxisChartSeries,ApexXAxis,ApexTooltip,ApexStroke} from "ng-apexcharts";

export type LineChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  chartTitleSubtitle:ApexTitleSubtitle;
};
export type ColumnChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  chartTitle:ApexTitleSubtitle;
};
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public linechartOptions: Partial<LineChartOptions>;
  public columnchartOptions: Partial<ColumnChartOptions>;
  menuItems = ['dashboard', 'sales', 'orders', 'customers', 'products'];
  chartSeries: ApexNonAxisChartSeries = [60, 30, 7, 3];
  chartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true
    }
  };
  chartLabels = ["Metropolitan centre", "Urban centre", "Semi-urban centre", "Rural centre"];
  chartTitle: ApexTitleSubtitle = {
    text: 'User from various city categories',
    align: 'center'
  };
  chartDataLabels: ApexDataLabels = {
    enabled: true
  };
  constructor(private router:Router,private service:UserServiceService) {
    this.linechartOptions = {
      series: [
        {
          name: "Appointments booked",
          data: [4, 1, 6, 29, 36, 17, 37 ,27,7]
        }
      ],
      chart: {
        height: 200,
        type: "area"
      },
      dataLabels: {
        enabled: false,

      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2023-01-11T00:00:00.000Z",
          "2023-01-11T03:30:00.000Z",
          "2023-01-11T06:30:00.000Z",
          "2023-01-11T09:30:00.000Z",
          "2023-01-11T12:30:00.000Z",
          "2023-01-11T15:30:00.000Z",
          "2023-01-11T18:30:00.000Z",
          "2023-01-11T21:30:00.000Z",
          "2023-01-12T00:00:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      },
      chartTitleSubtitle: { text: "Yesterday's Appointments" }
    };
    this.columnchartOptions = {
      series: [
        {
          name: "Appointments",
          data: [563, 637, 490, 430, 504]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Cardiologist",
          "General Physician",
          "Gynaecologist",
          "Dermatologist",
          "Dentist"
        ]
      },
      yaxis: {
        title: {
          text: "Appointments"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val+" Appointments" ;
          }
        }
      },
      chartTitle: { text: "Top 5 Specialists booked" }
    };
   }
  
  ngOnInit(): void {
    
  }
  getAllDoctors(){
    this.router.navigate(['/admin-dashboard/doctors']);
  }
  getAllPatients(){
    this.router.navigate(['/admin-dashboard/patients']);
  }
  getAllBills(){
    this.router.navigate(['/admin-dashboard/bills']);
  }
}
