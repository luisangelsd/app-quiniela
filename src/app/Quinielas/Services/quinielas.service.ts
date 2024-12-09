import { Injectable } from '@angular/core';
import { DtoQuiniela } from '../Dtos/dto-quiniela';

@Injectable({
  providedIn: 'root'
})
export class QuinielasService {

  public buscarQuinielaPorId(id :number):DtoQuiniela{

    switch (id) {
      case 1:
          return new DtoQuiniela(1, new Date('2024-11-27T11:59:59'),new Date('2024-12-T20:31:59'));
        break;
      case 2:
        return new DtoQuiniela(1, new Date('2024-12-11T12:00:00'),new Date('2024-12-15T22:00:00'));
      break;  
    
      default:
        return new DtoQuiniela(undefined, new Date('2024-11-27T11:59:59'),new Date('2024-11-27T11:59:59'));
        break;
    }
  }
}
