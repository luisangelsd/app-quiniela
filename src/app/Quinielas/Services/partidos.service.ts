import { Injectable } from '@angular/core';
import { DtoPartido } from '../Dtos/dto-partido';
import { Equipos } from '../BaseDatos/equipos';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  constructor(

  ) { }


  //==============================================//


public buscaPartidosPorIdQuiniela(idQuiniela: number):DtoPartido[]{

        let listPartidos: DtoPartido[]=[];
        switch (idQuiniela) {
            case 1:
                listPartidos.push(new DtoPartido(undefined,1, Equipos.monaco, Equipos.benfica ,2, 3, new Date(), 'Nota', 'V'));
                listPartidos.push(new DtoPartido(undefined,1, Equipos.psv, Equipos.shakhtar, 3, 2, new Date(), 'Nota', 'L'));
                listPartidos.push(new DtoPartido(undefined,1, Equipos.liverpool, Equipos.realMadrid, 2, 0, new Date(), 'Nota', 'L'));
                listPartidos.push(new DtoPartido(undefined,1, Equipos.celtic, Equipos.clubBrugge, 1, 1, new Date(), 'Nota', 'E'));
                listPartidos.push(new DtoPartido(undefined,1, Equipos.america, Equipos.toluca, 2, 0, new Date(), 'Nota', 'L'));
                listPartidos.push(new DtoPartido(undefined,1, Equipos.sanLuis, Equipos.tigres, 3, 0, new Date(), 'Nota', 'L'));

                listPartidos.push(new DtoPartido(undefined,1, Equipos.monterrey, Equipos.pumas, 1, 0, new Date(), 'Nota', 'L'));
                listPartidos.push(new DtoPartido(undefined,1, Equipos.pumas, Equipos.monterrey, 3, 5, new Date(), 'Nota', 'V'));

                listPartidos.push(new DtoPartido(undefined,1, Equipos.tigres, Equipos.sanLuis, 0, 0, new Date(), 'Nota', 'E'));
                listPartidos.push(new DtoPartido(undefined,1, Equipos.toluca, Equipos.america, 0, 2, new Date(), 'Nota', 'V'));
                break;
        
            default:
                break; 
        }

        return listPartidos;  
    }
}
