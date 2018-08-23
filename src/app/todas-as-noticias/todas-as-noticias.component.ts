import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {Noticia} from '../noticia.model';

@Component({
  selector: 'app-todas-as-noticias',
  templateUrl: './todas-as-noticias.component.html',
  styleUrls: ['./todas-as-noticias.component.css']
})
export class TodasAsNoticiasComponent implements OnInit {
  @Input() allNoticias = null;
  @Input() pesquisar = null;
  @Output() editor = new EventEmitter<Noticia>();
  @Output() remover = new EventEmitter<Noticia>();

  constructor() { }

  ngOnInit() {
  }

  editar(noticia){
    this.editor.emit(noticia)
  }
  excluir(noticia){
    this.remover.emit(noticia)
  }

}
