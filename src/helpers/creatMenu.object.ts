//import { type } from "os";

type menuOptions = ""|'all'|'dog'| 'cat' |'fishe';

export const createMenuObject =(activeMenu:menuOptions) =>{
    const returnObject ={
        all: false,
        dog:false,
        cat: false,
        fishe: false
    }
    if(activeMenu !==""){
        returnObject[activeMenu] = true

      }
  return returnObject
}