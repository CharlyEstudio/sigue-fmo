import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HerramientasService {

  constructor() { }

  fechaActual() {
    const h = new Date();

    let dia;

    if (h.getDate() < 10) {
      dia = '0' + h.getDate();
    } else {
      dia = h.getDate();
    }

    let mes;

    if ((h.getMonth() + 1) < 10) {
      mes = '0' + (h.getMonth() + 1);
    } else {
      mes = (h.getMonth() + 1);
    }

    const anio = h.getFullYear();

    const fecha = anio + '-' + mes + '-' + dia;
    return fecha;
  }

  dayActual() {
    const h = new Date();
    let dia: any;

    switch (h.getDay()) {
      case 1:
        dia = 'L';
        break;
      case 2:
        dia = 'M';
        break;
      case 3:
        dia = 'I';
        break;
      case 4:
        dia = 'J';
        break;
      case 5:
        dia = 'V';
        break;
      default:
        dia = 'L';
    }

    return dia;
  }

  horaActual() {
    const h = new Date();

    let hour;

    if (h.getHours() < 10) {
      hour = '0' + h.getHours();
    } else {
      hour = h.getHours();
    }

    let minutes;

    if (h.getMinutes() < 10) {
      minutes = '0' + h.getMinutes();
    } else {
      minutes = h.getMinutes();
    }

    let seconds;

    if (h.getSeconds() < 10) {
      seconds = '0' + h.getSeconds();
    } else {
      seconds = h.getSeconds();
    }

    const hora = hour + ':' + minutes + ':' + seconds;
    return hora;
  }

  fechaInicialMesActual() {
    const h = new Date();

    let mes;

    if ((h.getMonth() + 1) < 10) {
      mes = '0' + (h.getMonth() + 1);
    } else {
      mes = (h.getMonth() + 1);
    }

    const anio = h.getFullYear();

    const fecha = anio + '-' + mes + '-01';
    return fecha;
  }

}
