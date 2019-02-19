import { Component, ViewChild } from '@angular/core';
import { Empleado } from '../models/Empleado';
import { EmpleadosService } from '../services/empleados.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'consulta-empleados',
    templateUrl: './consulta.component.html',
    providers: [EmpleadosService]
})
export class ConsultaComponent {

    @ViewChild(NgForm) formEmpleado: NgForm;
    
    public title:string;
    public empleados:Array<Empleado>;
    public empleado:Empleado;

    constructor(
        public _empleadosService: EmpleadosService 
    ) {
        this.title = "Consulta Empleados";
        this.empleado = new Empleado();
    }

    ngOnInit() {
        this.getEmpleados(); 
        this.checkValidate();
    }

    cleanForm() {
        this.formEmpleado.reset();
    }

    checkValidate() {
        window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
              form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                form.classList.add('was-validated');
              }, false);
            });
          }, false);
    }

    getEmpleados() {
        this._empleadosService.findAll().subscribe(
            result => {
                this.empleados = result;
            },
            error => {
                console.log(error);
            }
        );    
    }

    saveEmpleado() {
        if(this.empleado.idEmpleado != undefined) {
            this._empleadosService.updateEmpleado(this.empleado).subscribe(
                result => {
                    if(result) {
                        alert("Se actualizo con exito!!");
                        this.getEmpleados();
                        this.cleanForm();
                    }
                },
                error => {
                    console.log(error);
                }
            );  
        } else {
            this._empleadosService.saveEmpleado(this.empleado).subscribe(
                result => {
                    if(result) {
                        alert("Se guardo con exito!!");
                        this.getEmpleados();
                        this.cleanForm();
                    }
                },
                error => {
                    console.log(error);
                }
            );  
        }
    }

    editarEmpleado(empleado) {
        this.empleado = Object.assign({}, empleado);
    }

    eliminarEmpleado(empleado, index) {
        this._empleadosService.deleteEmpleado(empleado).subscribe(
            result => {
                if(result.eliminado) {
                    alert("Se elimino con exito!!");
                    this.empleados.slice(index);
                    this.getEmpleados();
                }
            },
            error => {
                console.log(error);
            }
        );  
    }
}
