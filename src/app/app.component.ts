import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  value = '';
  itens = ["T1" , "T2" , "T3"];
  novoItem = "";
  pushItem = function() {
    if(this.novoItem != ""){
      this.itens.push(this.novoItem);
      this.novoItem = "";
    }
  }

  removerItem = function(index){
    this.itens.splice(index, 1);
  }
}