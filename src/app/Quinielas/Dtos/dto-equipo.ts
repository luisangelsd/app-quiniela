export class DtoEquipo {
    nombre: string | undefined;
    icono: string | undefined;

    constructor(nombre:string, icono: string){
        this.nombre = nombre;
        this.icono = icono;
    }
}
