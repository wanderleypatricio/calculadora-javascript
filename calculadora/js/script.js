const beep = document.getElementById('beep');
function capturarValor(valor) {
    playBeep();
    const display = document.getElementById("visor");
    display.value += valor;
}

function calcular() {
    playBeep();
    const display = document.getElementById("visor");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Erro";
    }
}

function limpar() {
    playBeep();
    const display = document.getElementById("visor");
    display.value = "";
}

function apagar() {
    playBeep();
    const display = document.getElementById('visor');
    display.value = display.value.slice(0, -1);
  }

function calcularRaiz() {
    playBeep();
    const display = document.getElementById('visor');
    try {
      display.value = Math.sqrt(eval(display.value));
    } catch {
      display.value = 'Erro';
    }
  }

// Toca o som de bip
function playBeep() {
    beep.currentTime = 0;
    beep.play();
}