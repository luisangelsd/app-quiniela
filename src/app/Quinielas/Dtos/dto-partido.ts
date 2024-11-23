import { DtoEquipo } from "./dto-equipo";

export class DtoPartido {

    public local: DtoEquipo
    public visitante: DtoEquipo;
    public fecha: Date | undefined;
    public nota: string | undefined;

    constructor(local: DtoEquipo, visitante: DtoEquipo, fecha: Date | undefined, nota: string | undefined){
        this.local = local;
        this.visitante = visitante;
        this.fecha = fecha;
        this.nota = nota;
    }
}
