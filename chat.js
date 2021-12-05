let contenedor = document.querySelectorAll('.div__con');
let btnIz = document.querySelector('#btnizqui');
let btnDe = document.querySelector('#btndere');
let btnPo = document.querySelectorAll('.btbspont');

let num = 0;

let h = 0
const remover = ()=>{
    for (let i = 0; i < contenedor.length; i++) {
        contenedor[i].classList.remove('div__activo');
        btnPo[i].classList.remove('btnactivo');
    }
}

const dessplaIzquie = ()=>{
    if(h <= 0){h =contenedor.length-1;}else{h--;}
    remover();
    btnPo[h].classList.add('btnactivo');
    contenedor[h].classList.add('div__activo');
}

const desplsDerescha = ()=>{
    if(h >= contenedor.length-1){h =0;}else{h++;}
    remover();
    btnPo[h].classList.add('btnactivo');
    contenedor[h].classList.add('div__activo');

}

btnIz.addEventListener('click',dessplaIzquie)
btnDe.addEventListener('click',desplsDerescha)


const botonesdepunto = ()=>{
for (let i = 0; i < btnPo.length; i++) {
    btnPo[i].addEventListener('click',()=>{
        num = i;
        h = num;
        remover();
        btnPo[num].classList.add('btnactivo');
        contenedor[num].classList.add('div__activo');
    });
    
}
}


botonesdepunto()