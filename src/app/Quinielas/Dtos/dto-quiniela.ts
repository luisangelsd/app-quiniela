export class DtoQuiniela {
    
    public id: number | undefined;
    public fechaInicio: Date | undefined;
    public fechaFin : Date | undefined; 

    constructor(
        id: number | undefined,
        fechaInicio: Date | undefined,
        fechaFin : Date | undefined
    ){
        this.id = id;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}
