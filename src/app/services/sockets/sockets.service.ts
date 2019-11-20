import { Injectable } from '@angular/core';

// Socket
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketsService {

  public socketStatus = false;

  constructor(
    private socket: Socket,
  ) {
    this.checkStatusServer();
  }

  checkStatusServer() {
    this.socket.on('connect', () => {
      console.log('Conectado al Servidor');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado del Servidor');
      this.socketStatus = false;
    });
  }

  acciones( evento: string, payload?: any, callback?: () => {} ) {
    this.socket.emit(evento, payload, callback);
  }

  escuchar( evento: string ) {
    return this.socket.fromEvent(evento);
  }

}
