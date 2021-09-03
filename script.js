const dd1 = document.getElementById('dado1');
const dd2 = document.getElementById('dado2');
const box_info = document.getElementById('saidaDados');

const arrFigureDados = ['fas fa-dice-one', 'fas fa-dice-two', 'fas fa-dice-three', 'fas fa-dice-four', 'fas fa-dice-five', 'fas fa-dice-six'];

let arrCont = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let dado1 = 0;
let dado2 = 0;
let somaDados = 0;


const bt_dados = document.getElementById('rolardados');
bt_dados.addEventListener('click', function () {
    console.log('entrou');
    dd1.setAttribute('class', arrFigureDados[Math.floor(Math.random() * (6))]);
    dd2.setAttribute('class', arrFigureDados[Math.floor(Math.random() * (6))]);
});

const bt_dados_mil = document.getElementById('rolardadosmil');
bt_dados_mil.addEventListener('click', function () {
    box_info.innerHTML = '';


    for (let i = 0; i < 1000; i++) {
        dado1 = Math.floor(Math.random() * (7 - 1) + 1);
        dado2 = Math.floor(Math.random() * (7 - 1) + 1);
        somaDados = dado1 + dado2;

        if (somaDados === 2) {
            arrCont[0] += 1;
        } else if (somaDados === 3) {
            arrCont[1] += 1;
        } else if (somaDados === 4) {
            arrCont[2] += 1;
        } else if (somaDados === 5) {
            arrCont[3] += 1;
        } else if (somaDados === 6) {
            arrCont[4] += 1;
        } else if (somaDados === 7) {
            arrCont[5] += 1;
        } else if (somaDados === 8) {
            arrCont[6] += 1;
        } else if (somaDados === 9) {
            arrCont[7] += 1;
        } else if (somaDados === 10) {
            arrCont[8] += 1;
        } else if (somaDados === 11) {
            arrCont[9] += 1;
        } else if (somaDados === 12) {
            arrCont[10] += 1;
        }
    }

    for (let i = 0; i < arrCont.length; i++) {
        
        const result = document.createElement('div');
        const element = document.createElement('p');
        const graphic = document.createElement('div');

        result.style.width = '100%';
        result.style.display = 'flex';
        result.style.justifyContent = 'space-between';
        result.style.border = '1px solid black';
        
        element.innerText = '' + (2 + i) + ':' + arrCont[i];
        element.style.fontSize = '20px';
        element.style.margin = '10px';

        graphic.style.width = ''+ arrCont[i] + 'px';
        graphic.style.backgroundColor = `rgb(${Math.random() * (255)},${Math.random() * (255)},${Math.random() * (255)})`;
        graphic.style.marginLeft = '20px';


        result.appendChild(element);
        result.appendChild(graphic);

        box_info.appendChild(result);
    }
    arrCont = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
});

