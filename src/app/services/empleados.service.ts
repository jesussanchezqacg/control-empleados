import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Empleado } from '../models/Empleado';

@Injectable()
export class EmpleadosService {

    public urlApi:string;

    constructor(
        private _http:Http
    ){
        this.urlApi = "https://control-empleados.herokuapp.com/api/empleado/";
    }

    findAll() {
        return this._http.get(
            this.urlApi.concat("findAll")
        ).map( res => res.json());
    }

    findAllByCurp(empleado:Empleado) {
        return this._http.get(
            this.urlApi.concat("findAllByCurp"),
            new RequestOptions({ 
                body: empleado 
            })
        ).map( res => res.json());
    }

    findAllByNombreCompleto(empleado:Empleado) {
        return this._http.get(
            this.urlApi.concat("findAllByNombreCompleto"),
            new RequestOptions({ 
                body: empleado 
            })
        ).map( res => res.json());
    }

    findAllByRfc(empleado:Empleado) {
        return this._http.get(
            this.urlApi.concat("findAllByRfc"),
            new RequestOptions({ 
                body: empleado 
            })
        ).map( res => res.json());
    }

    findByIdEmpleado(empleado:Empleado) {
        return this._http.get(
            this.urlApi.concat("findByIdEmpleado"),
            new RequestOptions({ 
                body: empleado 
            })
        ).map( res => res.json());
    }

    saveEmpleado(empleado:Empleado) {
        return this._http.post(
            this.urlApi.concat("saveEmpleado"),
            empleado
        ).map( res => res.json());
    }

    updateEmpleado(empleado:Empleado) {
        return this._http.put(
            this.urlApi.concat("updateEmpleado"),
            empleado
        ).map( res => res.json());
    }

    deleteEmpleado(empleado:Empleado) {
        return this._http.delete(
            this.urlApi.concat("deleteEmpleado"),
            new RequestOptions({ 
                body: empleado 
            })
        ).map( res => res.json());
    }
}