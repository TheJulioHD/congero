import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Congreso } from 'src/app/models/congreso';
import { CongresosService } from 'src/app/services/congresos.service';

@Component({
  selector: 'app-congreso-details',
  templateUrl: './congreso-details.page.html',
  styleUrls: ['./congreso-details.page.scss'],
})
export class CongresoDetailsPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  public folder!: string;

  lstcongreso= new Congreso() 
  comngresos= new Congreso() 

  constructor(
    // private activatedRoute: ActivatedRoute,
    private congreso: CongresosService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.congreso.getByID(parseInt(this.folder)).subscribe((res:any) =>{
      console.log(res.result)
      this.lstcongreso=res.result[0]
    })
  }

  guardar(){
    console.log(this.comngresos);
  }

}
