import { AfterViewChecked, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DtoPartido } from './Quinielas/Dtos/dto-partido';
import Swal from 'sweetalert2';
import { Constantes } from './Quinielas/Consts/constantes';
import { CommonModule } from '@angular/common';
import { GeneralService } from './Quinielas/Services/general.service';
import { PartidosService } from './Quinielas/Services/partidos.service';
import { QuinielasService } from './Quinielas/Services/quinielas.service';
import { DtoQuiniela } from './Quinielas/Dtos/dto-quiniela';


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
export class AppComponent implements OnInit, OnDestroy {

  //======================= VERIABLES =======================//


  protected listDtoPartido: DtoPartido[] = [];
  protected url: string= Constantes.URL_IMAGENES;
  //protected url: string= Constantes.URL_IMAGENES_DES;
  
  public resultados: string[] = [];
 

  //--- Configuracion quiniela
  protected dtoQuiniela: DtoQuiniela = new DtoQuiniela(undefined, undefined,undefined)
  public costoQuiniela : number = 15;

  //-- Errores formulario Verificar Resultados
  protected errorResultado: string = '';


  //-- Contador
  public dias: number = 0;
  public horas: number = 0;
  public minutos: number = 0;
  public segundos: number = 0;
  private intervaloContador: any;


  //===============================================================//
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

  protected formVerificarResultados = new FormGroup({
    resultado: new FormControl('', [Validators.required]) 
  });

  //===============================================================//
  constructor(
    private generalService: GeneralService,
    private partidosService: PartidosService,
    private quinielasService: QuinielasService
  ) { }

  //--------------------------------------------------------------//
  ngOnInit(): void {
    let id: number =2;
    this.listDtoPartido = this.partidosService.buscaPartidosPorIdQuiniela(id);
    this.dtoQuiniela = this.quinielasService.buscarQuinielaPorId(id);

    if (this.dtoQuiniela.fechaInicio != undefined) {
      let fehcaInicio: Date = this.dtoQuiniela.fechaInicio;
      this.actualizarContador(fehcaInicio); 
      this.intervaloContador = setInterval(() => this.actualizarContador(fehcaInicio), 1000); 
    }
  }

  //--------------------------------------------------------------//
  ngOnDestroy(): void {
    if (this.intervaloContador) {
      clearInterval(this.intervaloContador);
    }
  }
  
  //===============================================================//
 
  public agregarQuiniela():void{
      
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

  //--------------------------------------------------------------//
  protected eliminarQuiniela(posicion:number):void{
    if (posicion >= 0 && posicion < this.resultados.length) {
      this.resultados.splice(posicion, 1);
    }
  }


  //--------------------------------------------------------------//
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
    let numeroAleatorio:string = this.generalService.generarCodigoAleatorio(4);

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

  //--------------------------------------------------------------//
   // Método para enviar un mensaje a WhatsApp
   public enviarMensaje( mensaje: string): void {

    let numero : string = '+5615485806'; 

    // Codificar el mensaje para que sea seguro para URL
    const mensajeCodificado = encodeURIComponent( mensaje);

    //-- Crear la URL de WhatsApp
    const url = `https://wa.me/${numero}?text=${mensajeCodificado}`;

    //-- Abrir la URL en una nueva ventana o pestaña
    window.open(url, '_blank');

    //-- Reiniciamos formulario
    this.resultados = [];
    this.formularioGroup.reset();
  }


  //--------------------------------------------------------------//
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


  //--------------------------------------------------------------//
  private actualizarContador(fechaFin: Date): void {

    const ahora: Date = new Date();
    const diferencia: number = fechaFin.getTime() - ahora.getTime();

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

  //--------------------------------------------------------------//
  protected getTotalQuiniela():number{
    if(this.resultados != undefined && this.costoQuiniela!= undefined){
      return this.resultados.length * this.costoQuiniela;
    }
    return 0;

  }

  //--------------------------------------------------------------//
  protected estaActivaQuiniela():boolean{  
    if (this.dtoQuiniela.fechaFin != undefined) {
      if (this.dtoQuiniela.fechaFin < new Date()) {
        return false;
      }
    }
    return true;
  }

 //--------------------------------------------------------------//
  protected buscaResultados(): void {

    if (!this.validaFormularioConsultarResultados()) {      
      return ;
    }

    // Paso 1: Eliminar todo antes del primer guion (incluido el guion)
    let cadena: string = this.formVerificarResultados.get('resultado')?.value +'';

     // Paso 2: Dividir la cadena restante por comas y generar un arreglo
    const resultadosUsuario = cadena.split(',');

    //-- Validamos que existan los 10 resultados de la quiniela
    /**/
    if (resultadosUsuario.length < 9) {

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Parece que tus resultados no están en el formato correcto. Asegúrate de ingresar toda la información de manera adecuada."
      });

      return;
    }

    //-- Obtenemos resultados
    let informe:string[] = [];
    let tabla: string = '';
    
    tabla += '<table>'
      tabla += '<thead>'
        tabla += '<tr>'
          tabla += '<th>Local:</th>'                            
          tabla += '<th>Visitante:</th>'
          tabla += '<th>Ganador:</th>'
          tabla += '<th>Pronostico:</th>'                                 
          tabla += '<th></th>'
        tabla += '</tr>'
      tabla += '</thead>'
      tabla += '<tbody>'
        

    let noAciertos:number = 0;
    for (let e = 0; e < this.listDtoPartido.length; e++) {
       
      tabla +='<tr>'
        tabla += '<td><small>'+this.listDtoPartido[e].local.nombre+'</small></td>'
        tabla +='<td><small>'+this.listDtoPartido[e].visitante.nombre+'</small></td>'
        tabla +='<td><small>'+this.listDtoPartido[e].ganador+'</small></td>'
        tabla +='<td><small>'+resultadosUsuario[e] +'</small></td>'
        if (this.listDtoPartido[e].ganador != 'P') {
          if (resultadosUsuario[e] == this.listDtoPartido[e].ganador) {
            tabla +='<td>✔️</td>'
            noAciertos++;
          }else{
             tabla +='<td>❌</td>'
          }           
        }else{
           tabla +='<td><small> Pendiente</small> </td>'
        }
       
      tabla +='</tr> '
    }

    tabla +='</tbody>'
    tabla +='</table>'   

    tabla+='<br>'
    tabla+='<ul>'
      tabla+='<li> <b>Aciertos: </b> ' + noAciertos + '</li>'
    tabla+='</ul>'


    Swal.fire({
      title: "Tus Resultados:",
      html: tabla
    });
    
}

//--------------------------------------------------------------//
private validaFormularioConsultarResultados():boolean{

  if (this.formVerificarResultados.valid) {
    this.errorResultado = '';
    return true;
  }

  let resultado = this.formVerificarResultados.get('resultado')?.errors;

if (resultado) {
  // Usamos un switch para manejar los errores específicos
  switch (true) {
    case resultado['required']:
      this.errorResultado = 'El campo es obligatorio';
      break;
    default:
      this.errorResultado = 'Error desconocido';
      break;
  }
}

  return false;
}


  protected blurFormResultados(formGroup: FormGroup, formControl: string):void{

    let cadena: string = this.formVerificarResultados.get('resultado')?.value +'';
    
    cadena = cadena.toUpperCase();
    cadena = cadena.replace(/\s+/g, '');     //-- Eliminamos todos los espacios
    cadena = cadena.replace(/[^LVE,]/g, ''); //-- Elimina todo que no sea LVEP Y ,
    cadena = cadena.replace(/,+/g, ',');     //-- Elimina comas duplicadas 
    cadena=cadena.replace(/^,+|,+$/g, '');   //-- Elimina todas las comas de inicio y fin
    cadena = cadena
    .split(',')                         // Paso 1: Dividir la cadena por comas
    .map(item => item[0])               // Paso 2: Quedarse solo con el primer carácter de cada item
    .join(',');                         // Paso 3: Volver a juntar los elementos con comas
    



  
    
    this.formVerificarResultados.get('resultado')?.setValue(cadena);

  }
}
