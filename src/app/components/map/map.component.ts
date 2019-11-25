import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { environment } from '../../../environments/environment';

// MapBox
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

// Servicios
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import { HerramientasService } from '../../services/herramientas/herramientas.service';
import { SocketsService } from 'src/app/services/sockets/sockets.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: mapboxgl.Map;
  marker: mapboxgl.Marker;
  // style = 'mapbox://styles/mapbox/navigation-guidance-night-v2';
  // style = 'mapbox://styles/mapbox/dark-v10';
  style = 'mapbox://styles/charlyrdev/ck3eogfcg52o31ckkv2s2orv6/draft';
  lat = 20.556737;
  lng = -100.392379;

  lngLat: any[] = [];

  // Asesores
  ase2 = 2;
  ase3 = 3;
  ase4 = 4;
  ase5 = 5;
  ase6 = 6;
  ase7 = 7;
  ase8 = 8;
  ase9 = 9;
  ase10 = 10;
  ase11 = 11;
  ase12 = 12;
  ase13 = 13;
  ase15 = 15;
  ase19 = 19;
  ase112 = 112;
  ase157 = 157;
  ase211 = 211;
  ase241 = 241;
  ase841 = 841;
  geojson2 = {
    type: 'FeatureCollection',
    features: []
  };
  geojson3 = {
    type: 'FeatureCollection',
    features: []
  };
  geojson4 = {
    type: 'FeatureCollection',
    features: []
  };
  geojson5 = {
    type: 'FeatureCollection',
    features: []
  };
  geojson6 = {
    type: 'FeatureCollection',
    features: []
  };
  geojson7 = {
    type: 'FeatureCollection',
    features: []
  };
  geojson8 = {
    type: 'FeatureCollection',
    features: []
  };
  geojson9 = {
    type: 'FeatureCollection',
    features: []
  };
  geojson10 = {
    type: 'FeatureCollection',
    features: []
  };
  geojson11 = {
    type: 'FeatureCollection',
    features: []
  };
  geojson12 = {
    type: 'FeatureCollection',
    features: []
  };
  geojson13 = {
    type: 'FeatureCollection',
    features: []
  };
  geojson15 = {
    type: 'FeatureCollection',
    features: []
  };
  geojson19 = {
    type: 'FeatureCollection',
    features: []
  };
  geojson112 = {
    type: 'FeatureCollection',
    features: []
  };
  geojson157 = {
    type: 'FeatureCollection',
    features: []
  };
  geojson211 = {
    type: 'FeatureCollection',
    features: []
  };
  geojson241 = {
    type: 'FeatureCollection',
    features: []
  };
  geojson841 = {
    type: 'FeatureCollection',
    features: []
  };

  // Panel de Seguimiento
  asesores: any[] = [];
  comentarios: any[] = [];
  elemento: HTMLElement;

  constructor(
    private clientesService: ClientesService,
    private herramientas: HerramientasService,
    public socketService: SocketsService
  ) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  ngOnInit() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 8,
      center: [this.lng, this.lat]
    });
    // Add map controls
    // this.map.addControl(new mapboxgl.NavigationControl());

    // Cargar Asesores
    this.clientesService.obtenerAsesores().subscribe((ase: any) => {
      if (ase.length > 0) {
        this.asesores = ase;
      }
    });

    // Cargar Mapa
    this.cargarMapas();

    // Sockets
    this.elemento = document.getElementById('mensajes-sockets');
    this.socketService.escuchar('comentario-asesor').subscribe((comentario: any) => {
      if (comentario.estatus) {
        const asesor = Number(comentario.asesor.idFerrum);
        this.comentarios.push(comentario);
        setTimeout(() => {
          this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 50);
        switch (asesor) {
          case 2:
            this.cargarMapa2(true, comentario);
            break;
          case 3:
            this.cargarMapa3(true, comentario);
            break;
          case 4:
            this.cargarMapa4(true, comentario);
            break;
          case 5:
            this.cargarMapa5(true, comentario);
            break;
          case 6:
            this.cargarMapa6(true, comentario);
            break;
          case 7:
            this.cargarMapa7(true, comentario);
            break;
          case 8:
            this.cargarMapa8(true, comentario);
            break;
          case 9:
            this.cargarMapa9(true, comentario);
            break;
          case 10:
            this.cargarMapa10(true, comentario);
            break;
          case 11:
            this.cargarMapa11(true, comentario);
            break;
          case 12:
            this.cargarMapa12(true, comentario);
            break;
          case 13:
            this.cargarMapa13(true, comentario);
            break;
          case 15:
            this.cargarMapa15(true, comentario);
            break;
          case 19:
            this.cargarMapa19(true, comentario);
            break;
          case 112:
            this.cargarMapa112(true, comentario);
            break;
          case 157:
            this.cargarMapa157(true, comentario);
            break;
          case 211:
            this.cargarMapa211(true, comentario);
            break;
          case 241:
            this.cargarMapa241(true, comentario);
            break;
          case 841:
            this.cargarMapa841(true, comentario);
            break;
        }
      }
    });
  }

  // obtenerImagen(id: any) {
  //   const icono = `https://ferremayoristas.com.mx/sigue/assets/iconos/${id}.png`;
  //   return icono;
  // }

  cargarMapas() {
    this.cargarMapa2();
    this.cargarMapa3();
    this.cargarMapa4();
    this.cargarMapa5();
    this.cargarMapa6();
    this.cargarMapa7();
    this.cargarMapa8();
    this.cargarMapa9();
    this.cargarMapa10();
    this.cargarMapa11();
    this.cargarMapa12();
    this.cargarMapa13();
    this.cargarMapa15();
    this.cargarMapa19();
    this.cargarMapa112();
    this.cargarMapa157();
    this.cargarMapa211();
    this.cargarMapa241();
    this.cargarMapa841();
  }

  cargarMapa2(escucha: boolean = false, info: any = []) {
    if (!escucha) {
      this.clientesService.obtenerClientesvsVisita(this.ase2, this.herramientas.dayActual(), this.herramientas.fechaActual())
      .subscribe((clientes: any) => {
        if (clientes.status) {
          for (const cliente of clientes.respuesta) {
            const data = {
              type: 'Feature',
              properties: {
                title: cliente.numero,
                numero: Number(cliente.numero),
                visita: cliente.visita,
                description: cliente.numero + ' ' + cliente.nombre,
                iconSize: [50, 50],
                'marker-color': '#548cba'
              },
              geometry: {
                type: 'Point',
                coordinates: [
                  cliente.lng,
                  cliente.lat
                ]
              }
            };
            this.geojson2.features.push(data);
          }

          for (const mark of this.geojson2.features) {
            const el = document.createElement('div');
            el.className = 'marker';
            if (mark.properties.visita === 'NOT') {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/${this.ase2}.png)`;
              el.style.width = '15px';
              el.style.height = '15px';
            } else {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
              el.style.width = '25px';
              el.style.height = '25px';
            }
            el.setAttribute('id', mark.properties.numero + this.ase2);

            el.addEventListener('click', () => {
              console.log(mark.properties);
            });

            new mapboxgl.Marker(el).setLngLat(mark.geometry.coordinates).addTo(this.map);
          }
        }
      });
    } else {
      for (const mark of this.geojson2.features) {
        if (info.respuesta.numero === mark.properties.numero) {
          this.map.setZoom(8);
          const cli = document.getElementById(info.respuesta.numero + this.ase2);
          cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer2.png)`;
          cli.style.width = '25px';
          cli.style.height = '25px';
          this.map.flyTo({
            center: mark.geometry.coordinates,
            zoom: 18,
            bearing: 0,
            speed: 3,
            curve: 1,
            easing: (t: any) => t
          });
          setTimeout(() => {
            cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
            cli.style.width = '25px';
            cli.style.height = '25px';
            this.map.flyTo({
              center: [this.lng, this.lat],
              zoom: 8,
              bearing: 0,
              speed: 2,
              curve: 1,
              easing: function(t) { return t; }
            });
          }, 5000);
          break;
        }
      }
    }
  }

  cargarMapa3(escucha: boolean = false, info: any = []) {
    if (!escucha) {
      this.clientesService.obtenerClientesvsVisita(this.ase3, this.herramientas.dayActual(), this.herramientas.fechaActual())
      .subscribe((clientes: any) => {
        if (clientes.status) {
          for (const cliente of clientes.respuesta) {
            const data = {
              type: 'Feature',
              properties: {
                title: cliente.numero,
                numero: Number(cliente.numero),
                visita: cliente.visita,
                description: cliente.numero + ' ' + cliente.nombre,
                iconSize: [50, 50],
                'marker-color': '#548cba'
              },
              geometry: {
                type: 'Point',
                coordinates: [
                  cliente.lng,
                  cliente.lat
                ]
              }
            };
            this.geojson3.features.push(data);
          }

          for (const mark of this.geojson3.features) {
            const el = document.createElement('div');
            el.className = 'marker';
            if (mark.properties.visita === 'NOT') {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/${this.ase3}.png)`;
              el.style.width = '15px';
              el.style.height = '15px';
            } else {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
              el.style.width = '25px';
              el.style.height = '25px';
            }
            el.setAttribute('id', mark.properties.numero + this.ase3);

            el.addEventListener('click', () => {
              console.log(mark.properties);
            });

            new mapboxgl.Marker(el).setLngLat(mark.geometry.coordinates).addTo(this.map);
          }
        }
      });
    } else {
      for (const mark of this.geojson3.features) {
        if (info.respuesta.numero === mark.properties.numero) {
          this.map.setZoom(8);
          const cli = document.getElementById(info.respuesta.numero + this.ase3);
          cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer2.png)`;
          cli.style.width = '25px';
          cli.style.height = '25px';
          this.map.flyTo({
            center: mark.geometry.coordinates,
            zoom: 18,
            bearing: 0,
            speed: 3,
            curve: 1,
            easing: function(t) { return t; }
          });
          setTimeout(() => {
            cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
            cli.style.width = '25px';
            cli.style.height = '25px';
            this.map.flyTo({
              center: [this.lng, this.lat],
              zoom: 8,
              bearing: 0,
              speed: 2,
              curve: 1,
              easing: function(t) { return t; }
            });
          }, 5000);
          break;
        }
      }
    }
  }

  cargarMapa4(escucha: boolean = false, info: any = []) {
    if (!escucha) {
      this.clientesService.obtenerClientesvsVisita(this.ase4, this.herramientas.dayActual(), this.herramientas.fechaActual())
      .subscribe((clientes: any) => {
        if (clientes.status) {
          for (const cliente of clientes.respuesta) {
            const data = {
              type: 'Feature',
              properties: {
                title: cliente.numero,
                numero: Number(cliente.numero),
                visita: cliente.visita,
                description: cliente.numero + ' ' + cliente.nombre,
                iconSize: [50, 50],
                'marker-color': '#548cba'
              },
              geometry: {
                type: 'Point',
                coordinates: [
                  cliente.lng,
                  cliente.lat
                ]
              }
            };
            this.geojson4.features.push(data);
          }

          for (const mark of this.geojson4.features) {
            const el = document.createElement('div');
            el.className = 'marker';
            if (mark.properties.visita === 'NOT') {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/${this.ase4}.png)`;
              el.style.width = '15px';
              el.style.height = '15px';
            } else {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
              el.style.width = '25px';
              el.style.height = '25px';
            }
            el.setAttribute('id', mark.properties.numero + this.ase4);

            el.addEventListener('click', () => {
              console.log(mark.properties);
            });

            new mapboxgl.Marker(el).setLngLat(mark.geometry.coordinates).addTo(this.map);
          }
        }
      });
    } else {
      for (const mark of this.geojson4.features) {
        if (info.respuesta.numero === mark.properties.numero) {
          this.map.setZoom(8);
          const cli = document.getElementById(info.respuesta.numero + this.ase4);
          cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer2.png)`;
          cli.style.width = '25px';
          cli.style.height = '25px';
          this.map.flyTo({
            center: mark.geometry.coordinates,
            zoom: 18,
            bearing: 0,
            speed: 3,
            curve: 1,
            easing: function(t) { return t; }
          });
          setTimeout(() => {
            cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
            cli.style.width = '25px';
            cli.style.height = '25px';
            this.map.flyTo({
              center: [this.lng, this.lat],
              zoom: 8,
              bearing: 0,
              speed: 2,
              curve: 1,
              easing: function(t) { return t; }
            });
          }, 5000);
          break;
        }
      }
    }
  }

  cargarMapa5(escucha: boolean = false, info: any = []) {
    if (!escucha) {
      this.clientesService.obtenerClientesvsVisita(this.ase5, this.herramientas.dayActual(), this.herramientas.fechaActual())
      .subscribe((clientes: any) => {
        if (clientes.status) {
          for (const cliente of clientes.respuesta) {
            const data = {
              type: 'Feature',
              properties: {
                title: cliente.numero,
                numero: Number(cliente.numero),
                visita: cliente.visita,
                description: cliente.numero + ' ' + cliente.nombre,
                iconSize: [50, 50],
                'marker-color': '#548cba'
              },
              geometry: {
                type: 'Point',
                coordinates: [
                  cliente.lng,
                  cliente.lat
                ]
              }
            };
            this.geojson5.features.push(data);
          }

          for (const mark of this.geojson5.features) {
            const el = document.createElement('div');
            el.className = 'marker';
            if (mark.properties.visita === 'NOT') {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/${this.ase5}.png)`;
              el.style.width = '15px';
              el.style.height = '15px';
            } else {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
              el.style.width = '25px';
              el.style.height = '25px';
            }
            el.setAttribute('id', mark.properties.numero + this.ase5);

            el.addEventListener('click', () => {
              console.log(mark.properties);
            });

            new mapboxgl.Marker(el).setLngLat(mark.geometry.coordinates).addTo(this.map);
          }
        }
      });
    } else {
      for (const mark of this.geojson5.features) {
        if (info.respuesta.numero === mark.properties.numero) {
          this.map.setZoom(8);
          const cli = document.getElementById(info.respuesta.numero + this.ase5);
          cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer2.png)`;
          cli.style.width = '25px';
          cli.style.height = '25px';
          this.map.flyTo({
            center: mark.geometry.coordinates,
            zoom: 18,
            bearing: 0,
            speed: 3,
            curve: 1,
            easing: function(t) { return t; }
          });
          setTimeout(() => {
            cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
            cli.style.width = '25px';
            cli.style.height = '25px';
            this.map.flyTo({
              center: [this.lng, this.lat],
              zoom: 8,
              bearing: 0,
              speed: 2,
              curve: 1,
              easing: function(t) { return t; }
            });
          }, 5000);
          break;
        }
      }
    }
  }

  cargarMapa6(escucha: boolean = false, info: any = []) {
    if (!escucha) {
      this.clientesService.obtenerClientesvsVisita(this.ase6, this.herramientas.dayActual(), this.herramientas.fechaActual())
      .subscribe((clientes: any) => {
        if (clientes.status) {
          for (const cliente of clientes.respuesta) {
            const data = {
              type: 'Feature',
              properties: {
                title: cliente.numero,
                numero: Number(cliente.numero),
                visita: cliente.visita,
                description: cliente.numero + ' ' + cliente.nombre,
                iconSize: [50, 50],
                'marker-color': '#548cba'
              },
              geometry: {
                type: 'Point',
                coordinates: [
                  cliente.lng,
                  cliente.lat
                ]
              }
            };
            this.geojson6.features.push(data);
          }

          for (const mark of this.geojson6.features) {
            const el = document.createElement('div');
            el.className = 'marker';
            if (mark.properties.visita === 'NOT') {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/${this.ase6}.png)`;
              el.style.width = '15px';
              el.style.height = '15px';
            } else {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
              el.style.width = '25px';
              el.style.height = '25px';
            }
            el.setAttribute('id', mark.properties.numero + this.ase6);

            el.addEventListener('click', () => {
              console.log(mark.properties);
            });

            new mapboxgl.Marker(el).setLngLat(mark.geometry.coordinates).addTo(this.map);
          }
        }
      });
    } else {
      for (const mark of this.geojson6.features) {
        if (info.respuesta.numero === mark.properties.numero) {
          this.map.setZoom(8);
          const cli = document.getElementById(info.respuesta.numero + this.ase6);
          cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer2.png)`;
          cli.style.width = '25px';
          cli.style.height = '25px';
          this.map.flyTo({
            center: mark.geometry.coordinates,
            zoom: 18,
            bearing: 0,
            speed: 3,
            curve: 1,
            easing: function(t) { return t; }
          });
          setTimeout(() => {
            cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
            cli.style.width = '25px';
            cli.style.height = '25px';
            this.map.flyTo({
              center: [this.lng, this.lat],
              zoom: 8,
              bearing: 0,
              speed: 2,
              curve: 1,
              easing: function(t) { return t; }
            });
          }, 5000);
          break;
        }
      }
    }
  }

  cargarMapa7(escucha: boolean = false, info: any = []) {
    if (!escucha) {
      this.clientesService.obtenerClientesvsVisita(this.ase7, this.herramientas.dayActual(), this.herramientas.fechaActual())
      .subscribe((clientes: any) => {
        if (clientes.status) {
          for (const cliente of clientes.respuesta) {
            const data = {
              type: 'Feature',
              properties: {
                title: cliente.numero,
                numero: Number(cliente.numero),
                visita: cliente.visita,
                description: cliente.numero + ' ' + cliente.nombre,
                iconSize: [50, 50],
                'marker-color': '#548cba'
              },
              geometry: {
                type: 'Point',
                coordinates: [
                  cliente.lng,
                  cliente.lat
                ]
              }
            };
            this.geojson7.features.push(data);
          }

          for (const mark of this.geojson7.features) {
            const el = document.createElement('div');
            el.className = 'marker';
            if (mark.properties.visita === 'NOT') {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/${this.ase7}.png)`;
              el.style.width = '15px';
              el.style.height = '15px';
            } else {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
              el.style.width = '25px';
              el.style.height = '25px';
            }
            el.setAttribute('id', mark.properties.numero + this.ase7);

            el.addEventListener('click', () => {
              console.log(mark.properties);
            });

            new mapboxgl.Marker(el).setLngLat(mark.geometry.coordinates).addTo(this.map);
          }
        }
      });
    } else {
      for (const mark of this.geojson7.features) {
        if (info.respuesta.numero === mark.properties.numero) {
          this.map.setZoom(8);
          const cli = document.getElementById(info.respuesta.numero + this.ase7);
          cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer2.png)`;
          cli.style.width = '25px';
          cli.style.height = '25px';
          this.map.flyTo({
            center: mark.geometry.coordinates,
            zoom: 18,
            bearing: 0,
            speed: 3,
            curve: 1,
            easing: function(t) { return t; }
          });
          setTimeout(() => {
            cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
            cli.style.width = '25px';
            cli.style.height = '25px';
            this.map.flyTo({
              center: [this.lng, this.lat],
              zoom: 8,
              bearing: 0,
              speed: 2,
              curve: 1,
              easing: function(t) { return t; }
            });
          }, 5000);
          break;
        }
      }
    }
  }

  cargarMapa8(escucha: boolean = false, info: any = []) {
    if (!escucha) {
      this.clientesService.obtenerClientesvsVisita(this.ase8, this.herramientas.dayActual(), this.herramientas.fechaActual())
      .subscribe((clientes: any) => {
        if (clientes.status) {
          for (const cliente of clientes.respuesta) {
            const data = {
              type: 'Feature',
              properties: {
                title: cliente.numero,
                numero: Number(cliente.numero),
                visita: cliente.visita,
                description: cliente.numero + ' ' + cliente.nombre,
                iconSize: [50, 50],
                'marker-color': '#548cba'
              },
              geometry: {
                type: 'Point',
                coordinates: [
                  cliente.lng,
                  cliente.lat
                ]
              }
            };
            this.geojson8.features.push(data);
          }

          for (const mark of this.geojson8.features) {
            const el = document.createElement('div');
            el.className = 'marker';
            if (mark.properties.visita === 'NOT') {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/${this.ase8}.png)`;
              el.style.width = '15px';
              el.style.height = '15px';
            } else {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
              el.style.width = '25px';
              el.style.height = '25px';
            }
            el.setAttribute('id', mark.properties.numero + this.ase8);

            el.addEventListener('click', () => {
              console.log(mark.properties);
            });

            new mapboxgl.Marker(el).setLngLat(mark.geometry.coordinates).addTo(this.map);
          }
        }
      });
    } else {
      for (const mark of this.geojson8.features) {
        if (info.respuesta.numero === mark.properties.numero) {
          this.map.setZoom(8);
          const cli = document.getElementById(info.respuesta.numero + this.ase8);
          cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer2.png)`;
          cli.style.width = '25px';
          cli.style.height = '25px';
          this.map.flyTo({
            center: mark.geometry.coordinates,
            zoom: 18,
            bearing: 0,
            speed: 3,
            curve: 1,
            easing: function(t) { return t; }
          });
          setTimeout(() => {
            cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
            cli.style.width = '25px';
            cli.style.height = '25px';
            this.map.flyTo({
              center: [this.lng, this.lat],
              zoom: 8,
              bearing: 0,
              speed: 2,
              curve: 1,
              easing: function(t) { return t; }
            });
          }, 5000);
          break;
        }
      }
    }
  }

  cargarMapa9(escucha: boolean = false, info: any = []) {
    if (!escucha) {
      this.clientesService.obtenerClientesvsVisita(this.ase9, this.herramientas.dayActual(), this.herramientas.fechaActual())
      .subscribe((clientes: any) => {
        if (clientes.status) {
          for (const cliente of clientes.respuesta) {
            const data = {
              type: 'Feature',
              properties: {
                title: cliente.numero,
                numero: Number(cliente.numero),
                visita: cliente.visita,
                description: cliente.numero + ' ' + cliente.nombre,
                iconSize: [50, 50],
                'marker-color': '#548cba'
              },
              geometry: {
                type: 'Point',
                coordinates: [
                  cliente.lng,
                  cliente.lat
                ]
              }
            };
            this.geojson9.features.push(data);
          }

          for (const mark of this.geojson9.features) {
            const el = document.createElement('div');
            el.className = 'marker';
            if (mark.properties.visita === 'NOT') {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/${this.ase9}.png)`;
              el.style.width = '15px';
              el.style.height = '15px';
            } else {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
              el.style.width = '25px';
              el.style.height = '25px';
            }
            el.setAttribute('id', mark.properties.numero + this.ase9);

            el.addEventListener('click', () => {
              console.log(mark.properties);
            });

            new mapboxgl.Marker(el).setLngLat(mark.geometry.coordinates).addTo(this.map);
          }
        }
      });
    } else {
      for (const mark of this.geojson9.features) {
        if (info.respuesta.numero === mark.properties.numero) {
          this.map.setZoom(8);
          const cli = document.getElementById(info.respuesta.numero + this.ase9);
          cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer2.png)`;
          cli.style.width = '25px';
          cli.style.height = '25px';
          this.map.flyTo({
            center: mark.geometry.coordinates,
            zoom: 18,
            bearing: 0,
            speed: 3,
            curve: 1,
            easing: function(t) { return t; }
          });
          setTimeout(() => {
            cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
            cli.style.width = '25px';
            cli.style.height = '25px';
            this.map.flyTo({
              center: [this.lng, this.lat],
              zoom: 8,
              bearing: 0,
              speed: 2,
              curve: 1,
              easing: function(t) { return t; }
            });
          }, 5000);
          break;
        }
      }
    }
  }

  cargarMapa10(escucha: boolean = false, info: any = []) {
    if (!escucha) {
      this.clientesService.obtenerClientesvsVisita(this.ase10, this.herramientas.dayActual(), this.herramientas.fechaActual())
      .subscribe((clientes: any) => {
        if (clientes.status) {
          for (const cliente of clientes.respuesta) {
            const data = {
              type: 'Feature',
              properties: {
                title: cliente.numero,
                numero: Number(cliente.numero),
                visita: cliente.visita,
                description: cliente.numero + ' ' + cliente.nombre,
                iconSize: [50, 50],
                'marker-color': '#548cba'
              },
              geometry: {
                type: 'Point',
                coordinates: [
                  cliente.lng,
                  cliente.lat
                ]
              }
            };
            this.geojson10.features.push(data);
          }

          for (const mark of this.geojson10.features) {
            const el = document.createElement('div');
            el.className = 'marker';
            if (mark.properties.visita === 'NOT') {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/${this.ase10}.png)`;
              el.style.width = '15px';
              el.style.height = '15px';
            } else {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
              el.style.width = '25px';
              el.style.height = '25px';
            }
            el.setAttribute('id', mark.properties.numero + this.ase10);

            el.addEventListener('click', () => {
              console.log(mark.properties);
            });

            new mapboxgl.Marker(el).setLngLat(mark.geometry.coordinates).addTo(this.map);
          }
        }
      });
    } else {
      for (const mark of this.geojson10.features) {
        if (info.respuesta.numero === mark.properties.numero) {
          this.map.setZoom(8);
          const cli = document.getElementById(info.respuesta.numero + this.ase10);
          cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer2.png)`;
          cli.style.width = '25px';
          cli.style.height = '25px';
          this.map.flyTo({
            center: mark.geometry.coordinates,
            zoom: 18,
            bearing: 0,
            speed: 3,
            curve: 1,
            easing: function(t) { return t; }
          });
          setTimeout(() => {
            cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
            cli.style.width = '25px';
            cli.style.height = '25px';
            this.map.flyTo({
              center: [this.lng, this.lat],
              zoom: 8,
              bearing: 0,
              speed: 2,
              curve: 1,
              easing: function(t) { return t; }
            });
          }, 5000);
          break;
        }
      }
    }
  }

  cargarMapa11(escucha: boolean = false, info: any = []) {
    if (!escucha) {
      this.clientesService.obtenerClientesvsVisita(this.ase11, this.herramientas.dayActual(), this.herramientas.fechaActual())
      .subscribe((clientes: any) => {
        if (clientes.status) {
          for (const cliente of clientes.respuesta) {
            const data = {
              type: 'Feature',
              properties: {
                title: cliente.numero,
                numero: Number(cliente.numero),
                visita: cliente.visita,
                description: cliente.numero + ' ' + cliente.nombre,
                iconSize: [50, 50],
                'marker-color': '#548cba'
              },
              geometry: {
                type: 'Point',
                coordinates: [
                  cliente.lng,
                  cliente.lat
                ]
              }
            };
            this.geojson11.features.push(data);
          }

          for (const mark of this.geojson11.features) {
            const el = document.createElement('div');
            el.className = 'marker';
            if (mark.properties.visita === 'NOT') {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/${this.ase11}.png)`;
              el.style.width = '15px';
              el.style.height = '15px';
            } else {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
              el.style.width = '25px';
              el.style.height = '25px';
            }
            el.setAttribute('id', mark.properties.numero + this.ase11);

            el.addEventListener('click', () => {
              console.log(mark.properties);
            });

            new mapboxgl.Marker(el).setLngLat(mark.geometry.coordinates).addTo(this.map);
          }
        }
      });
    } else {
      for (const mark of this.geojson11.features) {
        if (info.respuesta.numero === mark.properties.numero) {
          this.map.setZoom(8);
          const cli = document.getElementById(info.respuesta.numero + this.ase11);
          cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer2.png)`;
          cli.style.width = '25px';
          cli.style.height = '25px';
          this.map.flyTo({
            center: mark.geometry.coordinates,
            zoom: 18,
            bearing: 0,
            speed: 3,
            curve: 1,
            easing: function(t) { return t; }
          });
          setTimeout(() => {
            cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
            cli.style.width = '25px';
            cli.style.height = '25px';
            this.map.flyTo({
              center: [this.lng, this.lat],
              zoom: 8,
              bearing: 0,
              speed: 2,
              curve: 1,
              easing: function(t) { return t; }
            });
          }, 5000);
          break;
        }
      }
    }
  }

  cargarMapa12(escucha: boolean = false, info: any = []) {
    if (!escucha) {
      this.clientesService.obtenerClientesvsVisita(this.ase12, this.herramientas.dayActual(), this.herramientas.fechaActual())
      .subscribe((clientes: any) => {
        if (clientes.status) {
          for (const cliente of clientes.respuesta) {
            const data = {
              type: 'Feature',
              properties: {
                title: cliente.numero,
                numero: Number(cliente.numero),
                visita: cliente.visita,
                description: cliente.numero + ' ' + cliente.nombre,
                iconSize: [50, 50],
                'marker-color': '#548cba'
              },
              geometry: {
                type: 'Point',
                coordinates: [
                  cliente.lng,
                  cliente.lat
                ]
              }
            };
            this.geojson12.features.push(data);
          }

          for (const mark of this.geojson12.features) {
            const el = document.createElement('div');
            el.className = 'marker';
            if (mark.properties.visita === 'NOT') {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/${this.ase12}.png)`;
              el.style.width = '15px';
              el.style.height = '15px';
            } else {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
              el.style.width = '25px';
              el.style.height = '25px';
            }
            el.setAttribute('id', mark.properties.numero + this.ase12);

            el.addEventListener('click', () => {
              console.log(mark.properties);
            });

            new mapboxgl.Marker(el).setLngLat(mark.geometry.coordinates).addTo(this.map);
          }
        }
      });
    } else {
      for (const mark of this.geojson12.features) {
        if (info.respuesta.numero === mark.properties.numero) {
          this.map.setZoom(8);
          const cli = document.getElementById(info.respuesta.numero + this.ase12);
          cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer2.png)`;
          cli.style.width = '25px';
          cli.style.height = '25px';
          this.map.flyTo({
            center: mark.geometry.coordinates,
            zoom: 18,
            bearing: 0,
            speed: 3,
            curve: 1,
            easing: function(t) { return t; }
          });
          setTimeout(() => {
            cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
            cli.style.width = '25px';
            cli.style.height = '25px';
            this.map.flyTo({
              center: [this.lng, this.lat],
              zoom: 8,
              bearing: 0,
              speed: 2,
              curve: 1,
              easing: function(t) { return t; }
            });
          }, 5000);
          break;
        }
      }
    }
  }

  cargarMapa13(escucha: boolean = false, info: any = []) {
    if (!escucha) {
      this.clientesService.obtenerClientesvsVisita(this.ase13, this.herramientas.dayActual(), this.herramientas.fechaActual())
      .subscribe((clientes: any) => {
        if (clientes.status) {
          for (const cliente of clientes.respuesta) {
            const data = {
              type: 'Feature',
              properties: {
                title: cliente.numero,
                numero: Number(cliente.numero),
                visita: cliente.visita,
                description: cliente.numero + ' ' + cliente.nombre,
                iconSize: [50, 50],
                'marker-color': '#548cba'
              },
              geometry: {
                type: 'Point',
                coordinates: [
                  cliente.lng,
                  cliente.lat
                ]
              }
            };
            this.geojson13.features.push(data);
          }

          for (const mark of this.geojson13.features) {
            const el = document.createElement('div');
            el.className = 'marker';
            if (mark.properties.visita === 'NOT') {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/${this.ase13}.png)`;
              el.style.width = '15px';
              el.style.height = '15px';
            } else {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
              el.style.width = '25px';
              el.style.height = '25px';
            }
            el.setAttribute('id', mark.properties.numero + this.ase13);

            el.addEventListener('click', () => {
              console.log(mark.properties);
            });

            new mapboxgl.Marker(el).setLngLat(mark.geometry.coordinates).addTo(this.map);
          }
        }
      });
    } else {
      for (const mark of this.geojson13.features) {
        if (info.respuesta.numero === mark.properties.numero) {
          this.map.setZoom(8);
          const cli = document.getElementById(info.respuesta.numero + this.ase13);
          cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer2.png)`;
          cli.style.width = '25px';
          cli.style.height = '25px';
          this.map.flyTo({
            center: mark.geometry.coordinates,
            zoom: 18,
            bearing: 0,
            speed: 3,
            curve: 1,
            easing: function(t) { return t; }
          });
          setTimeout(() => {
            cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
            cli.style.width = '25px';
            cli.style.height = '25px';
            this.map.flyTo({
              center: [this.lng, this.lat],
              zoom: 8,
              bearing: 0,
              speed: 2,
              curve: 1,
              easing: function(t) { return t; }
            });
          }, 5000);
          break;
        }
      }
    }
  }

  cargarMapa15(escucha: boolean = false, info: any = []) {
    if (!escucha) {
      this.clientesService.obtenerClientesvsVisita(this.ase15, this.herramientas.dayActual(), this.herramientas.fechaActual())
      .subscribe((clientes: any) => {
        if (clientes.status) {
          for (const cliente of clientes.respuesta) {
            const data = {
              type: 'Feature',
              properties: {
                title: cliente.numero,
                numero: Number(cliente.numero),
                visita: cliente.visita,
                description: cliente.numero + ' ' + cliente.nombre,
                iconSize: [50, 50],
                'marker-color': '#548cba'
              },
              geometry: {
                type: 'Point',
                coordinates: [
                  cliente.lng,
                  cliente.lat
                ]
              }
            };
            this.geojson15.features.push(data);
          }

          for (const mark of this.geojson15.features) {
            const el = document.createElement('div');
            el.className = 'marker';
            if (mark.properties.visita === 'NOT') {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/${this.ase15}.png)`;
              el.style.width = '15px';
              el.style.height = '15px';
            } else {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
              el.style.width = '25px';
              el.style.height = '25px';
            }
            el.setAttribute('id', mark.properties.numero + this.ase15);

            el.addEventListener('click', () => {
              console.log(mark.properties);
            });

            new mapboxgl.Marker(el).setLngLat(mark.geometry.coordinates).addTo(this.map);
          }
        }
      });
    } else {
      for (const mark of this.geojson15.features) {
        if (info.respuesta.numero === mark.properties.numero) {
          this.map.setZoom(8);
          const cli = document.getElementById(info.respuesta.numero + this.ase15);
          cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer2.png)`;
          cli.style.width = '25px';
          cli.style.height = '25px';
          this.map.flyTo({
            center: mark.geometry.coordinates,
            zoom: 18,
            bearing: 0,
            speed: 3,
            curve: 1,
            easing: function(t) { return t; }
          });
          setTimeout(() => {
            cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
            cli.style.width = '25px';
            cli.style.height = '25px';
            this.map.flyTo({
              center: [this.lng, this.lat],
              zoom: 8,
              bearing: 0,
              speed: 2,
              curve: 1,
              easing: function(t) { return t; }
            });
          }, 5000);
          break;
        }
      }
    }
  }

  cargarMapa19(escucha: boolean = false, info: any = []) {
    if (!escucha) {
      this.clientesService.obtenerClientesvsVisita(this.ase19, this.herramientas.dayActual(), this.herramientas.fechaActual())
      .subscribe((clientes: any) => {
        if (clientes.status) {
          for (const cliente of clientes.respuesta) {
            const data = {
              type: 'Feature',
              properties: {
                title: cliente.numero,
                numero: Number(cliente.numero),
                visita: cliente.visita,
                description: cliente.numero + ' ' + cliente.nombre,
                iconSize: [50, 50],
                'marker-color': '#548cba'
              },
              geometry: {
                type: 'Point',
                coordinates: [
                  cliente.lng,
                  cliente.lat
                ]
              }
            };
            this.geojson19.features.push(data);
          }

          for (const mark of this.geojson19.features) {
            const el = document.createElement('div');
            el.className = 'marker';
            if (mark.properties.visita === 'NOT') {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/${this.ase19}.png)`;
              el.style.width = '15px';
              el.style.height = '15px';
            } else {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
              el.style.width = '25px';
              el.style.height = '25px';
            }
            el.setAttribute('id', mark.properties.numero + this.ase19);

            el.addEventListener('click', () => {
              console.log(mark.properties);
            });

            new mapboxgl.Marker(el).setLngLat(mark.geometry.coordinates).addTo(this.map);
          }
        }
      });
    } else {
      for (const mark of this.geojson19.features) {
        if (info.respuesta.numero === mark.properties.numero) {
          this.map.setZoom(8);
          const cli = document.getElementById(info.respuesta.numero + this.ase19);
          cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer2.png)`;
          cli.style.width = '25px';
          cli.style.height = '25px';
          this.map.flyTo({
            center: mark.geometry.coordinates,
            zoom: 18,
            bearing: 0,
            speed: 3,
            curve: 1,
            easing: function(t) { return t; }
          });
          setTimeout(() => {
            cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
            cli.style.width = '25px';
            cli.style.height = '25px';
            this.map.flyTo({
              center: [this.lng, this.lat],
              zoom: 8,
              bearing: 0,
              speed: 2,
              curve: 1,
              easing: function(t) { return t; }
            });
          }, 5000);
          break;
        }
      }
    }
  }

  cargarMapa112(escucha: boolean = false, info: any = []) {
    if (!escucha) {
      this.clientesService.obtenerClientesvsVisita(this.ase112, this.herramientas.dayActual(), this.herramientas.fechaActual())
      .subscribe((clientes: any) => {
        if (clientes.status) {
          for (const cliente of clientes.respuesta) {
            const data = {
              type: 'Feature',
              properties: {
                title: cliente.numero,
                numero: Number(cliente.numero),
                visita: cliente.visita,
                description: cliente.numero + ' ' + cliente.nombre,
                iconSize: [50, 50],
                'marker-color': '#548cba'
              },
              geometry: {
                type: 'Point',
                coordinates: [
                  cliente.lng,
                  cliente.lat
                ]
              }
            };
            this.geojson112.features.push(data);
          }

          for (const mark of this.geojson112.features) {
            const el = document.createElement('div');
            el.className = 'marker';
            if (mark.properties.visita === 'NOT') {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/${this.ase112}.png)`;
              el.style.width = '15px';
              el.style.height = '15px';
            } else {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
              el.style.width = '25px';
              el.style.height = '25px';
            }
            el.setAttribute('id', mark.properties.numero + this.ase112);

            el.addEventListener('click', () => {
              console.log(mark.properties);
            });

            new mapboxgl.Marker(el).setLngLat(mark.geometry.coordinates).addTo(this.map);
          }
        }
      });
    } else {
      for (const mark of this.geojson112.features) {
        if (info.respuesta.numero === mark.properties.numero) {
          this.map.setZoom(8);
          const cli = document.getElementById(info.respuesta.numero + this.ase112);
          cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer2.png)`;
          cli.style.width = '25px';
          cli.style.height = '25px';
          this.map.flyTo({
            center: mark.geometry.coordinates,
            zoom: 18,
            bearing: 0,
            speed: 3,
            curve: 1,
            easing: function(t) { return t; }
          });
          setTimeout(() => {
            cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
            cli.style.width = '25px';
            cli.style.height = '25px';
            this.map.flyTo({
              center: [this.lng, this.lat],
              zoom: 8,
              bearing: 0,
              speed: 2,
              curve: 1,
              easing: function(t) { return t; }
            });
          }, 5000);
          break;
        }
      }
    }
  }

  cargarMapa157(escucha: boolean = false, info: any = []) {
    if (!escucha) {
      this.clientesService.obtenerClientesvsVisita(this.ase157, this.herramientas.dayActual(), this.herramientas.fechaActual())
      .subscribe((clientes: any) => {
        if (clientes.status) {
          for (const cliente of clientes.respuesta) {
            const data = {
              type: 'Feature',
              properties: {
                title: cliente.numero,
                numero: Number(cliente.numero),
                visita: cliente.visita,
                description: cliente.numero + ' ' + cliente.nombre,
                iconSize: [50, 50],
                'marker-color': '#548cba'
              },
              geometry: {
                type: 'Point',
                coordinates: [
                  cliente.lng,
                  cliente.lat
                ]
              }
            };
            this.geojson157.features.push(data);
          }

          for (const mark of this.geojson157.features) {
            const el = document.createElement('div');
            el.className = 'marker';
            if (mark.properties.visita === 'NOT') {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/${this.ase157}.png)`;
              el.style.width = '15px';
              el.style.height = '15px';
            } else {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
              el.style.width = '25px';
              el.style.height = '25px';
            }
            el.setAttribute('id', mark.properties.numero + this.ase157);

            el.addEventListener('click', () => {
              console.log(mark.properties);
            });

            new mapboxgl.Marker(el).setLngLat(mark.geometry.coordinates).addTo(this.map);
          }
        }
      });
    } else {
      for (const mark of this.geojson157.features) {
        if (info.respuesta.numero === mark.properties.numero) {
          this.map.setZoom(8);
          const cli = document.getElementById(info.respuesta.numero + this.ase157);
          cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer2.png)`;
          cli.style.width = '25px';
          cli.style.height = '25px';
          this.map.flyTo({
            center: mark.geometry.coordinates,
            zoom: 18,
            bearing: 0,
            speed: 3,
            curve: 1,
            easing: function(t) { return t; }
          });
          setTimeout(() => {
            cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
            cli.style.width = '25px';
            cli.style.height = '25px';
            this.map.flyTo({
              center: [this.lng, this.lat],
              zoom: 8,
              bearing: 0,
              speed: 2,
              curve: 1,
              easing: function(t) { return t; }
            });
          }, 5000);
          break;
        }
      }
    }
  }

  cargarMapa211(escucha: boolean = false, info: any = []) {
    if (!escucha) {
      this.clientesService.obtenerClientesvsVisita(this.ase211, this.herramientas.dayActual(), this.herramientas.fechaActual())
      .subscribe((clientes: any) => {
        if (clientes.status) {
          for (const cliente of clientes.respuesta) {
            const data = {
              type: 'Feature',
              properties: {
                title: cliente.numero,
                numero: Number(cliente.numero),
                visita: cliente.visita,
                description: cliente.numero + ' ' + cliente.nombre,
                iconSize: [50, 50],
                'marker-color': '#548cba'
              },
              geometry: {
                type: 'Point',
                coordinates: [
                  cliente.lng,
                  cliente.lat
                ]
              }
            };
            this.geojson211.features.push(data);
          }

          for (const mark of this.geojson211.features) {
            const el = document.createElement('div');
            el.className = 'marker';
            if (mark.properties.visita === 'NOT') {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/${this.ase211}.png)`;
              el.style.width = '15px';
              el.style.height = '15px';
            } else {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
              el.style.width = '25px';
              el.style.height = '25px';
            }
            el.setAttribute('id', mark.properties.numero + this.ase211);

            el.addEventListener('click', () => {
              console.log(mark.properties);
            });

            new mapboxgl.Marker(el).setLngLat(mark.geometry.coordinates).addTo(this.map);
          }
        }
      });
    } else {
      for (const mark of this.geojson211.features) {
        if (info.respuesta.numero === mark.properties.numero) {
          this.map.setZoom(8);
          const cli = document.getElementById(info.respuesta.numero + this.ase211);
          cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer2.png)`;
          cli.style.width = '25px';
          cli.style.height = '25px';
          this.map.flyTo({
            center: mark.geometry.coordinates,
            zoom: 18,
            bearing: 0,
            speed: 3,
            curve: 1,
            easing: function(t) { return t; }
          });
          setTimeout(() => {
            cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
            cli.style.width = '25px';
            cli.style.height = '25px';
            this.map.flyTo({
              center: [this.lng, this.lat],
              zoom: 8,
              bearing: 0,
              speed: 2,
              curve: 1,
              easing: function(t) { return t; }
            });
          }, 5000);
          break;
        }
      }
    }
  }

  cargarMapa241(escucha: boolean = false, info: any = []) {
    if (!escucha) {
      this.clientesService.obtenerClientesvsVisita(this.ase241, this.herramientas.dayActual(), this.herramientas.fechaActual())
      .subscribe((clientes: any) => {
        if (clientes.status) {
          for (const cliente of clientes.respuesta) {
            const data = {
              type: 'Feature',
              properties: {
                title: cliente.numero,
                numero: Number(cliente.numero),
                visita: cliente.visita,
                description: cliente.numero + ' ' + cliente.nombre,
                iconSize: [50, 50],
                'marker-color': '#548cba'
              },
              geometry: {
                type: 'Point',
                coordinates: [
                  cliente.lng,
                  cliente.lat
                ]
              }
            };
            this.geojson241.features.push(data);
          }

          for (const mark of this.geojson241.features) {
            const el = document.createElement('div');
            el.className = 'marker';
            if (mark.properties.visita === 'NOT') {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/${this.ase241}.png)`;
              el.style.width = '15px';
              el.style.height = '15px';
            } else {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
              el.style.width = '25px';
              el.style.height = '25px';
            }
            el.setAttribute('id', mark.properties.numero + this.ase241);

            el.addEventListener('click', () => {
              console.log(mark.properties);
            });

            new mapboxgl.Marker(el).setLngLat(mark.geometry.coordinates).addTo(this.map);
          }
        }
      });
    } else {
      for (const mark of this.geojson241.features) {
        if (info.respuesta.numero === mark.properties.numero) {
          this.map.setZoom(8);
          const cli = document.getElementById(info.respuesta.numero + this.ase241);
          cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer2.png)`;
          cli.style.width = '25px';
          cli.style.height = '25px';
          this.map.flyTo({
            center: mark.geometry.coordinates,
            zoom: 18,
            bearing: 0,
            speed: 3,
            curve: 1,
            easing: function(t) { return t; }
          });
          setTimeout(() => {
            cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
            cli.style.width = '25px';
            cli.style.height = '25px';
            this.map.flyTo({
              center: [this.lng, this.lat],
              zoom: 8,
              bearing: 0,
              speed: 2,
              curve: 1,
              easing: function(t) { return t; }
            });
          }, 5000);
          break;
        }
      }
    }
  }

  cargarMapa841(escucha: boolean = false, info: any = []) {
    if (!escucha) {
      this.clientesService.obtenerClientesvsVisita(this.ase841, this.herramientas.dayActual(), this.herramientas.fechaActual())
      .subscribe((clientes: any) => {
        if (clientes.status) {
          for (const cliente of clientes.respuesta) {
            const data = {
              type: 'Feature',
              properties: {
                title: cliente.numero,
                numero: Number(cliente.numero),
                visita: cliente.visita,
                description: cliente.numero + ' ' + cliente.nombre,
                iconSize: [50, 50],
                'marker-color': '#548cba'
              },
              geometry: {
                type: 'Point',
                coordinates: [
                  cliente.lng,
                  cliente.lat
                ]
              }
            };
            this.geojson841.features.push(data);
          }

          for (const mark of this.geojson841.features) {
            const el = document.createElement('div');
            el.className = 'marker';
            if (mark.properties.visita === 'NOT') {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/${this.ase841}.png)`;
              el.style.width = '15px';
              el.style.height = '15px';
            } else {
              el.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
              el.style.width = '25px';
              el.style.height = '25px';
            }
            el.setAttribute('id', mark.properties.numero + this.ase841);

            el.addEventListener('click', () => {
              console.log(mark.properties);
            });

            new mapboxgl.Marker(el).setLngLat(mark.geometry.coordinates).addTo(this.map);
          }
        }
      });
    } else {
      for (const mark of this.geojson841.features) {
        if (info.respuesta.numero === mark.properties.numero) {
          this.map.setZoom(8);
          const cli = document.getElementById(info.respuesta.numero + this.ase841);
          cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer2.png)`;
          cli.style.width = '25px';
          cli.style.height = '25px';
          this.map.flyTo({
            center: mark.geometry.coordinates,
            zoom: 18,
            bearing: 0,
            speed: 3,
            curve: 1,
            easing: function(t) { return t; }
          });
          setTimeout(() => {
            cli.style.backgroundImage = `url(https://ferremayoristas.com.mx/sigue/assets/iconos/customer3.png)`;
            cli.style.width = '25px';
            cli.style.height = '25px';
            this.map.flyTo({
              center: [this.lng, this.lat],
              zoom: 8,
              bearing: 0,
              speed: 2,
              curve: 1,
              easing: function(t) { return t; }
            });
          }, 5000);
          break;
        }
      }
    }
  }

}
