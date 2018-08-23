import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-barra-de-navegacao',
  templateUrl: './barra-de-navegacao.component.html',
  styleUrls: ['./barra-de-navegacao.component.css']
})
export class BarraDeNavegacaoComponent implements OnInit {
  /**
   * O evento que permite o componente host saber qual opção da barra de navegação foi clicada
   */
  @Output() apontou = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }
  /**
   * Método utilizado como tratador para o evento `apontou`. 
   * 
   * O parâmetro `nome` informa para o componente host qual o nome da tela que
   * foi clicada pelo usuário por meio do método `emit()` do atributo `apontou`.
   *
   * @param nome 
   */
  irPara(nome){
    this.apontou.emit(nome);
  }

}
