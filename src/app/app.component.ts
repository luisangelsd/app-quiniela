import { AfterViewChecked, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Quinielas/Pages/home/home.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DtoPartido } from './Quinielas/Dtos/dto-partido';
import { DtoEquipo } from './Quinielas/Dtos/dto-equipo';
import Swal from 'sweetalert2';
import { Constantes } from './Quinielas/Consts/constantes';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule
     
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy , AfterViewChecked{

  //======================= VERIABLES =======================//
  protected listDtoPartido: DtoPartido[] = [];

  protected porDefinir: DtoEquipo= new DtoEquipo('Por Definir','porDefinir.webp');
  protected america: DtoEquipo= new DtoEquipo('América','america.webp');
  protected tijuana: DtoEquipo= new DtoEquipo('Tijuana','tijuana.webp');
  protected sanLuis: DtoEquipo= new DtoEquipo('San Luis','sanLuis.webp');
  protected pachuca: DtoEquipo= new DtoEquipo('Pachuca','pachuca.webp');
  protected queretaro: DtoEquipo= new DtoEquipo('Querétaro','queretaro.webp');
  protected pumas: DtoEquipo= new DtoEquipo('Pumas','pumas.webp');
  protected chivas: DtoEquipo= new DtoEquipo('Chivas','chivas.webp');
  protected mazatlan: DtoEquipo= new DtoEquipo('Mazatlán','mazatlan.webp');
  protected monterrey: DtoEquipo= new DtoEquipo('Monterrey','monterrey.webp');
  protected santos: DtoEquipo= new DtoEquipo('Santos','santos.webp');
  protected atlas: DtoEquipo= new DtoEquipo('Atlas','atlas.webp');
  protected cruzAzul: DtoEquipo= new DtoEquipo('Cruz Azul','cruzAzul.webp');
  protected toluca: DtoEquipo= new DtoEquipo('Toluca','toluca.webp');
  protected tigres: DtoEquipo= new DtoEquipo('Tigres','tigres.webp');
  protected puebla: DtoEquipo= new DtoEquipo('Puebla','puebla.webp');
  protected leon: DtoEquipo= new DtoEquipo('León','leon.webp');
  protected necaxa: DtoEquipo= new DtoEquipo('Necaxa','necaxa.webp');
  protected juarez: DtoEquipo= new DtoEquipo('FC Juárez','juarez.webp');

  protected realMadrid: DtoEquipo= new DtoEquipo('Real Madrid','realMadrid.png');
  protected espanyol: DtoEquipo= new DtoEquipo('Espanyol','espanyol.png');
  protected osasuna: DtoEquipo= new DtoEquipo('Osasuna','osasuna.png');
  protected lasPalmas: DtoEquipo= new DtoEquipo('Las Palmas','lasPalmas.png');
  protected liverpool: DtoEquipo= new DtoEquipo('Liverpool','liverpool.png');
  protected celtic: DtoEquipo= new DtoEquipo('Celtic','celtic.png');
  protected clubBrugge: DtoEquipo= new DtoEquipo('Club Brugge','club-brugge.png'); 
  
  protected monaco: DtoEquipo= new DtoEquipo('Monaco','monaco.png');  
  protected benfica: DtoEquipo= new DtoEquipo('Benfica','benfica.png');  
  protected psv: DtoEquipo= new DtoEquipo('PSV','psv.png');  
  protected shakhtar: DtoEquipo= new DtoEquipo('Shakhtar','shakhtar.png'); 

  protected url: string= Constantes.URL_IMAGENES;

  public resultados: string[] = [];
  public costoQuiniela : number = 20;

  protected nota1 : string='Partido de Ida';
  protected nota2 : string='Partido de Vuelta';
  protected nota3: string ='UEFA Champions League';
  protected fecha1:Date =new Date('2024-11-28')
  protected fecha2:Date =new Date('2024-11-31')

  //------------------------------//
   public formularioGroup = new FormGroup({
     partido_1: new FormControl('', [Validators.required]),
     partido_2: new FormControl('',[Validators.required]),
     partido_3: new FormControl('',[Validators.required]),
     partido_4: new FormControl('',[Validators.required]),
     partido_5: new FormControl('',[Validators.required]),
     partido_6: new FormControl('',[Validators.required]),
     partido_7: new FormControl('',[Validators.required]),
     partido_8: new FormControl('',[Validators.required]),
     partido_9: new FormControl('',[Validators.required]),
     partido_10: new FormControl('',[Validators.required])
  });

    public formularioWhatsApp = new FormGroup({
      nombre: new FormControl('', [Validators.required])
    });


    ngAfterViewChecked(): void {

    }

  //------------------------------//
  protected cargarPartidos():void {

    this.listDtoPartido.push(new DtoPartido(this.monaco, this.benfica, this.fecha1, this.nota3));
    this.listDtoPartido.push(new DtoPartido(this.psv, this.shakhtar, this.fecha1, this.nota3));
    this.listDtoPartido.push(new DtoPartido(this.liverpool, this.realMadrid, this.fecha1, this.nota3));
    this.listDtoPartido.push(new DtoPartido(this.celtic, this.clubBrugge, this.fecha1, this.nota3));

    this.listDtoPartido.push(new DtoPartido(this.america, this.toluca, this.fecha1, this.nota1));
    this.listDtoPartido.push(new DtoPartido(this.sanLuis, this.tigres, this.fecha1, this.nota1));
    this.listDtoPartido.push(new DtoPartido(this.monterrey, this.pumas, this.fecha1, this.nota1));
    this.listDtoPartido.push(new DtoPartido(this.pumas, this.monterrey, this.fecha2, this.nota2));
    this.listDtoPartido.push(new DtoPartido(this.tigres, this.sanLuis, this.fecha2, this.nota2));
    this.listDtoPartido.push(new DtoPartido(this.toluca, this.america, this.fecha2, this.nota2));


  }    

    //------------------------------//

    public agregar():void{
      
      if (this.formularioGroup.valid) {
        let resultado:string = '';

        for (let index = 1; index < 11; ++index) {          
          resultado =  resultado+ this.formularioGroup.get('partido_'+index)?.value;

          if (index < 10 && resultado != null ) {
            resultado= resultado + ',';
          }
        }
        this.resultados.push(resultado);        
        this.formularioGroup.reset();
        setTimeout(() => {
          this.scrollToElement('ancla-enviar');
        }, 200);  // 500 milisegundos = 0.5 segundos

       
      }else{
        Swal.fire("¡Aún faltan partidos por seleccionar!");
      }
    }

    protected eliminar(posicion:number):void{
      if (posicion >= 0 && posicion < this.resultados.length) {
        this.resultados.splice(posicion, 1);
      }
    }


  //------------------------------//
  protected enviarTodo():void{

    //-- Validamos que seleccione 1 quinielas
    if (this.resultados.length < 1) {
      Swal.fire("¡Necesitar por lo menos 1 Quienelas! (Agrega una :D)!");
      return;
    }

    //-- validamos formulario
    if (!this.formularioWhatsApp.valid) {
      Swal.fire("No olvides escribir tu primer Nombre y Apellido");
      return;
    }

     //-- Numero alfanumerico:
    let numeroAleatorio:string = this.generarCodigoAleatorio(4);

    //-- Obtenemos todas las quinielas 
    let nombre: string = this.formularioWhatsApp.get('nombre')?.value + '';

    //-- Generamos id
    let id = numeroAleatorio + '-' + nombre + ': ';

    //-- Obtenemos todas las quinielas
    let mensajeCompleto : string = '';

    this.resultados.forEach( e => {
      if (mensajeCompleto != '') { mensajeCompleto = mensajeCompleto + '\n';  }
      mensajeCompleto = mensajeCompleto + id + e;
    })

    //-- Agregamos el total
    mensajeCompleto = mensajeCompleto + '\n';
    mensajeCompleto = mensajeCompleto + 'Total: $' + this.getTotalQuiniela();

    //-- Enviamos por WhatApp
    this.enviarMensaje(mensajeCompleto);
  }


  //------------------------------//
  // Método para desplazar la pantalla al elemento con el id especificado
  public scrollToElement(id: string): void {
    // Obtén el elemento por su id
    const element = document.getElementById(id);
    
    if (element) {
      // Usa scrollIntoView para desplazar la vista
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error(`Elemento con id "${id}" no encontrado.`);
    }

    
  }

  //------------------------------//
  private fechaObjetivo: Date;
  public dias: number = 0;
  public horas: number = 0;
  public minutos: number = 0;
  public segundos: number = 0;
  private intervaloContador: any;

  constructor() {
    // Define la fecha objetivo aquí
    this.fechaObjetivo = new Date('2024-11-26T23:59:59');
  }

  ngOnInit(): void {
    this.actualizarContador();
    this.cargarPartidos();
    this.intervaloContador = setInterval(() => this.actualizarContador(), 1000);
  }

  ngOnDestroy(): void {
    if (this.intervaloContador) {
      clearInterval(this.intervaloContador);
    }
  }

  private actualizarContador(): void {
    const ahora: Date = new Date();
    const diferencia: number = this.fechaObjetivo.getTime() - ahora.getTime();

    if (diferencia <= 0) {
      this.dias = 0;
      this.horas = 0;
      this.minutos = 0;
      this.segundos = 0;
      clearInterval(this.intervaloContador);
      return;
    }

    this.dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    this.horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    this.segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
  }


  public generarCodigoAleatorio(longitud: number): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let resultado = '';
    const caracteresLength = caracteres.length;
    for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteresLength);
      resultado += caracteres[indiceAleatorio];
    }
    return resultado;
  }

   // Método para enviar un mensaje a WhatsApp
   enviarMensaje( mensaje: string): void {

    let numero:string = '+5615485806'; 

    // Codificar el mensaje para que sea seguro para URL
    const mensajeCodificado = encodeURIComponent( mensaje);

    // Crear la URL de WhatsApp
    const url = `https://wa.me/${numero}?text=${mensajeCodificado}`;

    // Abrir la URL en una nueva ventana o pestaña
    window.open(url, '_blank');

    this.formularioGroup.reset();
  }


  //-----------------------------------------------------------------//
  protected getTotalQuiniela():number{
    if(this.resultados != undefined && this.costoQuiniela!= undefined){
      return this.resultados.length * this.costoQuiniela;
    }
    return 0;

  }

}
