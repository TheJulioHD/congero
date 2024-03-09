import { Component, OnInit } from '@angular/core';
import { DTOCongreso } from 'src/app/models/DtoCongreso';
import { Congreso } from 'src/app/models/congreso';
import { CongresosService } from 'src/app/services/congresos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  congresos: DTOCongreso [] =[];
  constructor(private congreso:CongresosService) { }

  ngOnInit() {
    this.congreso.getAll().subscribe((res:any) => this.congresos=res.result)
  }
  onClick(id:any){
    console.log(id)
  }
}
