import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-leitor-de-noticia',
  templateUrl: './leitor-de-noticia.component.html',
  styleUrls: ['./leitor-de-noticia.component.css']
})
export class LeitorDeNoticiaComponent implements OnInit {
  
  @Input()
  leituraNoticia;
  
  constructor() { }

  ngOnInit() {
  }

  @Output()
  fechou = new EventEmitter<any>();


  fechar(){
    this.fechou.emit();
  }

}
