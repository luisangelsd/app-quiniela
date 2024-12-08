import { DtoEquipo } from "./dto-equipo";

export class DtoPartido {

    public id: number| undefined;
    public idQuiniela: number | undefined;
    public local: DtoEquipo
    public visitante: DtoEquipo;
    public golesLocal: number | undefined;
    public golesVisitante: number | undefined;
    public fecha: Date | undefined;
    public nota: string | undefined;
    public ganador: 'V' | 'L' |'E' | 'P' = 'P'

    constructor(
        id: number| undefined,
        idQuiniela: number | undefined,
        local: DtoEquipo,
        visitante: DtoEquipo,
        golesLocal: number | undefined,
        golesVisitante: number | undefined,
        fecha: Date | undefined,
        nota: string | undefined,
        ganador: 'V' | 'L' |'E' | 'P'
    )
        {
        this.id = id;
        this.idQuiniela = idQuiniela;    
        this.local = local;
        this.visitante = visitante;
        this.golesLocal = golesLocal;
        this.golesVisitante = golesVisitante;
        this.fecha = fecha;
        this.nota = nota;
        this.ganador = ganador;
    }
}
