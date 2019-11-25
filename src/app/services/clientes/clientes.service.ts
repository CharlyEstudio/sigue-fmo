import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerClientesvsVisita(perid: any, dia: any, fecha: any) {
    const url = `https://ferremayoristas.com.mx:3001/clientes/dia/${perid}/${dia}/${fecha}`;

    return this.http.get(url);
  }

  obtenerAsesores() {
    const url = `https://ferremayoristas.com.mx/api/diarios.php?opcion=0`;

    return this.http.get(url);
  }
}
