function tabuada() {
    let numero = document.querySelector('input#txtn');
    let tabuada = document.querySelector('select#tab');
    if (numero.value == '') {
        alert('[ERRO] Digite um número válido!')
    } else {
        let oper = document.getElementsByName('operacao');
        let n = Number(numero.value);
        tabuada.innerHTML = ''
        if (oper[0].checked) {
            for (count = 1; count < 10; count++) {
                let item = document.createElement('option');
                document.body.style.background = 'chocolate';
                item.text = `${n} + ${count} = ${n * count}`;
                tabuada.appendChild(item);
            }
        } else if (oper[1].checked) {
            for (count = 1; count < 10; count++) {
                let item = document.createElement('option');
                document.body.style.background = 'tomato';
                item.text = `${n} - ${count} = ${n - count}`;
                tabuada.appendChild(item);
            }
        } else if (oper[2].checked) {
            for (count = 0; count < 10; count++) {
                let item = document.createElement('option');
                document.body.style.background = 'seagreen';
                item.text = `${n} x ${count} = ${n * count}`;
                tabuada.appendChild(item);
            }
        } else {
            for (count = 0; count < 10; count++) {
                let item = document.createElement('option');
                document.body.style.background = 'slateblue';
                item.text = `${n} ÷ ${count} = ${n / count}`;
                tabuada.appendChild(item);
            }
        }
    }
}