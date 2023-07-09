
const Gretting = (name) => {
    if(typeof name == "number"){
        return "Error no se puede usar: " + typeof(name)
    }

    return "Hola" + name

}

//Create three function arrows 

//funcion palindroma

// metod = reverse, split 
const isEqual = (str1) => {
  let valor = str1.split("").reverse().join("")

  if (valor === str1){
    return console.log("la palabra es palindroma")
  }
  else 
  return console.log("No es palindroma")
}

isEqual("ana")



//function suma
const sum = (a, b) => {
    return typeof(a + b) === "string" ? "No es un numero" : a + b;
}
console.log(sum("JHoan", "juan"))


// funsion condicion, multiplo de 3 y 5 feezBuzz si es multiplo de 3 es fezz y si es de 5 es buzz

const number = num => {
    if (num % 3 == 0 && num % 5 == 0)
        return console.log("Es un feezBuzz")
    else if( num % 3 == 0 )
        return console.log("Es un feez")
    else if( num % 5 == 0)
        return console.log("Es un Buzz")
    else
        return console.log("No sos niverga jajjajaja")
}
number(2);

// funcion a mi taste = gusto, flavor = sabor 

const flavor = taste => {
    for (let i = 0; i < 4 ; i++){
        console.log(taste[i])
    }
}

taste = ['Chocolita' ,'sundae', 'cono', 'helado']

flavor(taste)



// definicion de funciones flecha 

const hola = (name) => {
    return "Hola " + name 
}

console.log(hola("jhoan"))

// Funciones ternarias 
// Si tenemos solo un parametro en una funcion flecha no es necesario usar parentesis 
const GetMoney = money => {
    return typeof(money) == "string" ? "No es dinero" : money
}

console.log(GetMoney(3000))



// Funciones anonimas autoejecutables 
    /*
    (() => {
        for(let i = 0; i<10; i++){
            console.log(i)
        }
    })();*/

console.log(Gretting("Jhoan"))

let valor = 34

console.log(valor)

valor = "Jhoan"

console.log(valor)

//typeof() === devuelve el tipo de dato que se le pasa
//



// Tipos de datos primitivos
/*
String
Number
Boolean
null
undefined


// Tipos de datos compuestos

Object
Function
Symbol*/
