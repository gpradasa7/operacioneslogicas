let fnum = 0;
let snum = 0;
let a = 0;
let b = 0;
let text = 'Los números son iguales';
let text2= 'Los números no son iguales';


//Capturar solo números enteros positivos


function isInputNumber(evt) {
  var ch = String.fromCharCode(evt.which);
  if (!/[0-9]/.test(ch)) {
    evt.preventDefault();
  }

}
//Hallar el menor de los dos números sin If/Else:

capturarbutton();

function capturarbutton() {
  let button = document.getElementById("button");
  button.addEventListener("click", menor);
}

function menor() {
  fnum = Number(document.getElementById("fnum").value);
  snum =Number(document.getElementById("snum").value);
  let min = ((fnum + snum) - Math.abs(fnum - snum))/2;
  
  mostrarMenor(min);
}
function mostrarMenor(min) {
  if (fnum % snum != 0) { 
    document.querySelector("#result").value = min;
  } else {
    document.querySelector("#result").value = text;
  }
}
// validar si son iguales los numeros

capturarbotton();

function capturarbotton() {
  let botton1 = document.getElementById("button-1");
  botton1.addEventListener("click", iguales);
}

function iguales() {
  fnum1 = Number(document.getElementById("fnum-1").value);
  snum1=Number(document.getElementById("snum-1").value);
   
  validarIguales(fnum1,snum1);
}
function validarIguales() {
  if (fnum1 % snum1 != 0) { 
    document.querySelector("#result-1").value = text2;
  } else {
    document.querySelector("#result-1").value = text;
  }
}

//Intercambiar dos valores sin auxiliar
capturarboton();
function capturarboton() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", intercValores);
}

function intercValores() {
a =  Number(document.getElementById("n1").value);
b = Number(document.getElementById("n2").value);
a = a + b;
b = a - b;
a = a - b;
a =  Number(document.getElementById("n1").value);
b = Number(document.getElementById("n2").value);
  mostrarcambio(a,b);
}

function mostrarcambio(a,b) {
  document.querySelector("#n1").value = b;
    document.querySelector("#n2").value = a;
  }

  //Sumar dos elementos sin + 
  capturarboton2();

function capturarboton2() {
  let boton2 = document.getElementById("boton2");
  boton2.addEventListener("click", calcSuma);
}

  function calcSuma() {
    let x  =Number(document.getElementById("fnum2").value);
    let y = Number(document.getElementById("snum2").value);
   while (x !== 0) {
     [x, y]= [(x & y) << 1, x ^ y];

   }
   mostrarSuma(y);
   return y
  }
  
  function  mostrarSuma(y,x) {
  document.querySelector("#result2").value = y;
   }

   //********************************************************************************************************** */
   //Control de la pagina y el diseño

   const button1 = document.querySelector('#show1')
   const button2= document.querySelector('#show2')
   const button3 = document.querySelector('#show3')
   const button4 = document.querySelector('#show4')
const popup1 = document.querySelector('.popup-wrapper1')
const popup2 = document.querySelector('.popup-wrapper2')
const popup3 = document.querySelector('.popup-wrapper3')
const popup4 = document.querySelector('.popup-wrapper4')
const closeButton1 = document.querySelector('.close-popup1')
const closeButton2 = document.querySelector('.close-popup2')
const closeButton3 = document.querySelector('.close-popup3')
const closeButton4 = document.querySelector('.close-popup4')

button1.addEventListener('click', () => {
  popup1.style.display = 'block'
})

button2.addEventListener('click', () => {
  popup2.style.display = 'block'
})

button3.addEventListener('click', () => {
  popup3.style.display = 'block'
})

button4.addEventListener('click', () => {
  popup4.style.display = 'block'
})


closeButton1.addEventListener('click', () => {
  popup1.style.display = 'none' 
})
closeButton2.addEventListener('click', () => {
  popup2.style.display = 'none' 
})
closeButton3.addEventListener('click', () => {
  popup3.style.display = 'none' 
})
closeButton4.addEventListener('click', () => {
  popup4.style.display = 'none' 
})

