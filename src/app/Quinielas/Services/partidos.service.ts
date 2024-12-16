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

            case 2:              
              listPartidos.push(new DtoPartido(undefined,2, Equipos.juventus, Equipos.manCity, 2, 0, new Date('2024-12-11T14:00:00'), 'UEFA Champions League', 'L'));
              listPartidos.push(new DtoPartido(undefined,2, Equipos.bDortmund, Equipos.barcelona, 2, 3, new Date('2024-12-11T14:00:00'), 'UEFA Champions League', 'V'));
              listPartidos.push(new DtoPartido(undefined,2, Equipos.feyenoord, Equipos.spartaPraha, 4, 2, new Date('2024-12-11T14:00:00'), 'UEFA Champions League', 'L'));
              listPartidos.push(new DtoPartido(undefined,2, Equipos.arsenal, Equipos.monaco, 3, 0, new Date('2024-12-11T14:00:00'), 'UEFA Champions League', 'L'));
              listPartidos.push(new DtoPartido(undefined,2, Equipos.america, Equipos.monterrey, 2, 1, new Date('2024-12-12T15:00:00'), 'Final MX (Ida)', 'L'));
              listPartidos.push(new DtoPartido(undefined,2, Equipos.empoli, Equipos.torino, 0, 1, new Date('2024-12-13T14:00:00'), 'Serie A', 'V'));
              listPartidos.push(new DtoPartido(undefined,2, Equipos.udinese, Equipos.napoles, 1, 3, new Date('2024-12-14T14:00:00'), 'Serie A', 'V'));
              listPartidos.push(new DtoPartido(undefined,2, Equipos.parma, Equipos.hellasVerona, 2, 3, new Date('2024-12-15T14:00:00'), 'Serie A', 'V'));
              listPartidos.push(new DtoPartido(undefined,2, Equipos.milan, Equipos.genoa, 0, 0, new Date('2024-12-15T15:00:00'), 'Serie A', 'E'));
              listPartidos.push(new DtoPartido(undefined,2, Equipos.monterrey, Equipos.america, 1, 1, new Date('2024-12-15T15:00:00'), 'Final MX (Vuelta)', 'E'));
              break;

              case 3:              
              listPartidos.push(new DtoPartido(undefined,3, Equipos.barcelona, Equipos.atleticoMadrid, 0, 0, new Date('2024-12-21T00:00:00'), 'laLiga', 'P'));
              listPartidos.push(new DtoPartido(undefined,3, Equipos.celtaDeVigo, Equipos.realSociedad, 0, 0, new Date('2024-12-21T00:00:00'), 'laLiga', 'P'));

              listPartidos.push(new DtoPartido(undefined,3, Equipos.genoa, Equipos.napoles, 0, 0, new Date('2024-12-21T00:00:00'), 'Serie A', 'P'));


              listPartidos.push(new DtoPartido(undefined,3, Equipos.astonVilla, Equipos.manchesterCity, 0, 0, new Date('2024-12-22T00:00:00'), 'Premier League', 'P'));



              listPartidos.push(new DtoPartido(undefined,3, Equipos.realMadrid, Equipos.sevilla, 0, 0, new Date('2024-12-22T00:00:00'), 'laLiga', 'P'));
              listPartidos.push(new DtoPartido(undefined,3, Equipos.leganes, Equipos.villareal, 0, 0, new Date('2024-12-22T00:00:00'), 'laLiga', 'P'));
              listPartidos.push(new DtoPartido(undefined,3, Equipos.atalanta, Equipos.empoli, 0, 0, new Date('2024-12-22T00:00:00'), 'Serie A', 'P'));
              listPartidos.push(new DtoPartido(undefined,3, Equipos.roma, Equipos.parma, 0, 0, new Date('2024-12-22T00:00:00'), 'Serie A', 'P'));
              listPartidos.push(new DtoPartido(undefined,3, Equipos.psv, Equipos.feyenoord, 0, 0, new Date('2024-12-22T00:00:00'), 'Eredivisie', 'P'));
              listPartidos.push(new DtoPartido(undefined,3, Equipos.tottenham, Equipos.liverpool, 0, 0, new Date('2024-12-22T00:00:00'), 'Premier League', 'P'));






              break;   
        
            default:
                break; 
        }

        return listPartidos;  
    }
}
