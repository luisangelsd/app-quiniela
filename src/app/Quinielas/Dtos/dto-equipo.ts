export class DtoEquipo {
    id: number | undefined;
    nombre: string | undefined;
    icono: string | undefined;

    constructor( id: number | undefined, nombre:string, icono: string){
        this.id = id;
        this.nombre = nombre;
        this.icono = icono;
    }
}
