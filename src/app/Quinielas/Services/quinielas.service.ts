import { Injectable } from '@angular/core';
import { DtoQuiniela } from '../Dtos/dto-quiniela';

@Injectable({
  providedIn: 'root'
})
export class QuinielasService {

  public buscarQuinielaPorId(id :number):DtoQuiniela{

    switch (id) {
      case 1:
          return new DtoQuiniela(1, new Date('2024-11-27T11:59:59'),new Date('2024-12-07T20:31:59'));
        break;
    
      default:
        return new DtoQuiniela(undefined, new Date('2024-11-27T11:59:59'),new Date('2024-11-27T11:59:59'));
        break;
    }
  }
}
