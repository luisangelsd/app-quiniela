import { DtoEquipo } from "./dto-equipo";

export class DtoPartido {

    public local: DtoEquipo
    public visitante: DtoEquipo;

    constructor(local: DtoEquipo, visitante: DtoEquipo){
        this.local = local;
        this.visitante = visitante;
    }
}
