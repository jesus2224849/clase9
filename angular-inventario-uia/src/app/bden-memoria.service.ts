import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

//import { IPartida} from './IPartida';

@Injectable({
  providedIn: 'root'
})
export class BDenMemoriaService implements InMemoryDbService { 
  createDb() {
    const SolicitudesMaterial = [
      {
        "id": "SSM",
        "name": "Alfonso Miguel Reyes",
        "estatus": "apartada",
        "clase": "SSM",
        "descripcion": null,
        "idItem": null,
        "nameItem": null,
        "idCategoria": null,
        "nameCategoria": null,
        "nameLote": null,
        "cantidad": "5",
        "idProveedor": null,
        "minimoNivel": null,
        "items": [
          {
            "id": "710-121-Silla ejecutiva clase 1-0",
            "name": "710-121-Silla ejecutiva clase 1-0",
            "clase": "item",
            "namePartida": null,
            "nameSubpartida": "Silla",
            "nameCategoria": "silla ejecutiva clase 1",
            "idPartida": null,
            "idSubpartida": "120,"
          }
        ]
      }
    ]
  }

  //constructor() { }
}
