import { Component } from '@angular/core';
import { Subscriber } from 'rxjs';
import { LocationService } from './services/location.service';
import { FormControl, FormGroup, FormsModule,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'locations';
  public locations: Array<any> = [];
  verSeleccion: boolean = false;
  createLocation = new FormGroup({

    name: new FormControl('',Validators.required),
    areaM2: new FormControl('',Validators.required),
    opcionSeleccionado: new FormControl('',Validators.required),
    setParentLocation: new FormControl('',Validators.required),
  }

  )

  constructor(

  	private locationService:LocationService
  	) {

        this.locationService.getAllLocotion().subscribe((resp: any) =>{
          console.log(resp)
          this.locations= resp
        })
        
    }

    onSubmit(form:any){
      this.locationService.createLocation(form).subscribe((res) =>{
        console.log(res)
        alert('Creado....');
        this.locationService.getAllLocotion().subscribe((resp: any) =>{
          console.log(resp)
          this.locations= resp
        })
       
      })
     
    }

    Delete(id:number){
      this.locationService.DeleteLocation(id).subscribe((res) =>{
        console.log(res)
        alert('Eliminado....');
        this.locationService.getAllLocotion().subscribe((resp: any) =>{
          console.log(resp)
          this.locations= resp
        })
       
      })
    }

    capturar(form:any) {

      console.log(form.opcionSeleccionado);
      this.verSeleccion = form.opcionSeleccionado;
      console.log(this.verSeleccion);
    }
}
