import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  public transform(value, args: string){
    if(!value){ //Checkeamos si no hay valor, no retornamos nada para que no haya ningun error
      return;
    }

    if(!args) { //Si no teine argumentos, devolvemos otra vez el value sin mas
      return value;
    }

    args = args.toLowerCase();
    return value.filter( item => {
      return JSON.stringify(item).toLowerCase().includes(args);
    });

  }
}