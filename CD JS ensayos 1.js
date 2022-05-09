/* PRIMER PASO

/*alert("hola mundo!");

document.write("holaperras volvi :v")

prompt("te amo, tu me amas ?")

prompt("te a mordido un perro :V")*/

/* document.write("Este codigo sera usado para probar nonvatamente las funciones basicas de JS, los operadores, las variables, etc");



document.write("<br>");
document.write("<br>");      

document.write("<br>");
document.write("<br>");   
        
/*let numero1= 1
let numero2 = "1";

 document.write(numero1 == numero2 && numero1!==numero2); */

/* {
     
    let x = prompt( " Que dia cumplimos mes bebe: " );

    if (x===18){

    alert(x);
    document.write("Gracias por ser tan especial, nuestro dia es " + x + " febrero ")} 
    


    

    if(x != 18 ) {document.write("que mala eres bb se te olvido nuestra fecha especial :'v ")}

    if(x > 31 ) {document.write("Joa deja el vicio, eso ni siquiera es un dia del mes :v")} */
//2.9}
/*fIN PRIMER PASO

/SEGUNDO PASO*/



 //PROBLEMA HELADERIA
 

 
    let dineroRoberto = prompt(" ¿CUANTO DINERO TIENES?:");
   // let dineroPedro = prompt("Cuanto dinero tienes Pedro:");
   // let dineroCofla = prompt("Cuanto dinero tienes Cofla:");

    //Para potecito de heado con confites o pote de 1/4  KG
if (dineroRoberto >= 2.9)
      
    {

      let a = prompt("Puedes comprar un pote de 1/4 de litro o un Potecito de helados con confites,valen lo mismo, si desea pote de 1/4 de litro escriba 1, si desea Potecito de helados con confites escriba 2  :");

      if (a == 1) { document.write("has comprado pote de 1/4 de litro su cambio es: " + (dineroRoberto - 2.9)); }


      else if (a == 2) { document.write("has comprado potecito de helado con confites, tu cambio es: " + (dineroRoberto - 2.9)); }
  

     else if (a != 1 && a != 2) {
      document.write("ud no ha marcado opcion correcta, reinicie la pagina.)  } ")};
    }

    //PARA BOMBON HELADO MARCA HELARDO 
  else if (dineroRoberto >=1.8 && dineroRoberto < 2.9 )
       {let b = prompt ( "Puede comprar bombon de helado marca helardo, si desea comprarlo escriba 1: ")
          if (b == 1){document.write("su compra fue exitosa, su cambio es de: " + (dineroRoberto - 1.8) )}
            else if (b != 1 ) {document.write("ud no ha marcado opcion correcta, reinicie la pagina.)  } ")}
        }
    // PARA BOMBON DE HELADO MARCA HELADOVICH
  else if (dineroRoberto >=1.7 && dineroRoberto < 1.8 )
        {let c = prompt ( "Puede comprar bombon de helado marca HELADOVICH, si desea comprarlo escriba 1: ")
           if (c== 1){document.write("su compra fue exitosa, su cambio es de: " + (dineroRoberto - 1.7) )}
           else if (c != 1 ) {document.write("ud no ha marcado opcion correcta, reinicie la pagina.)  } ")}
         }
     //PARA BOMBON DE HELADO MARCA HELADIX
  else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7 )
         {let d = prompt ( "Puede comprar bombon de helado marca HELADIX, si desea comprarlo escriba 1: ")
            if (d== 1){document.write("su compra fue exitosa, su cambio es de: " + (dineroRoberto - 1.6) )}
            else if (d != 1 ) {document.write("ud no ha marcado opcion correcta, reinicie la pagina.)  } ")}
        }
     //PARA PALITO DE HELADO DE CREMA
  else if (dineroRoberto >=1 && dineroRoberto < 1.6 )
            {let e = prompt ( "Puede comprar PALITO DE HELADO DE CREMA, si desea comprarlo escriba 1: ")
               if (e == 1){document.write("su compra fue exitosa, su cambio es de: " + (dineroRoberto - 1) )}
                else if (e != 1 ) {document.write("ud no ha marcado opcion correcta, reinicie la pagina.)  } ")}
             }

      //PARA PALITO DE HELADO DE AGUA
  else if (dineroRoberto >=0.6 && dineroRoberto < 1 )
             {let f = prompt ( "Puede comprar PALITO DE HELADO DE AGUA, si desea comprarlo escriba 1: ")
                if (f == 1){document.write("su compra fue exitosa, su cambio es de: " + (dineroRoberto - 0.6) )}
                else if (f != 1 ) {document.write("ud no ha marcado opcion correcta, reinicie la pagina.)  } ")}}
   
     else {document.write("No tiene fondos suficientes, o digito incorrectamente el valor, si su caso es el segundo por favor reinicie la pagina." )}
                        

             
            
              
 /* else if (dineroRoberto >=1.8 && dineroRoberto < 2.9 )
              {let b = prompt ( "Puede comprar bombon de helado marca helardo, si desea comprarlo escriba 1")
                 if (b=== 1){document.write("su compra fue exitosa, su cambio es de: " + (dineroRoberto - 1.8) )}
                 else if (b != 1 ) {document.write("ud no ha marcado opcion correcta, reinicie la pagina.)  } ")}
               }
           
          */
          
      
/*else if (dineroRoberto >=1.8 && dineroRoberto < 2.9 )
   {let b = prompt ( "Puede comprar bombon de helado marca helardo, si desea comprarlo escriba 1");
      if (b= 1){document.write("su compra fue exitosa, su cambio es de: " + (dineroRoberto - 1.8) )}}

*/
