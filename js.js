let operacie = JSON.parse(localStorage.getItem("operacie"));
let operreverse = operacie.reverse();
let Divcont = document.getElementById('container');
        
if(operacie == null || "" ) {
        operacie = [];
}

for(let i = 0; i < operreverse.length; i++) {
    Divcont.innerHTML += "<p>" + operreverse[i] + "</p>";
}


let btnResult = document.getElementById('btnResult');
    btnResult.onclick = function(event){
        event.preventDefault();
        operacie2 = [];
        let a = document.getElementById('input1').value;
        let b = document.getElementById('input2').value;
        let sele = document.getElementById('sel');
        let val = sele.options[sele.selectedIndex].value;


        switch(val) {
            case '+':
                let c = (+a + +b);
                JSON.stringify(c);
                document.getElementById('res').value = c;
                operacie2.push(a + val + b + '=' + c);
                operacie.push(a + val + b + '=' + c);
                break;
            case '-':
                let d = (a - b);
                JSON.stringify(d);
                document.getElementById('res').value = d;
                operacie2.push(a + val + b + '=' + d);
                operacie.push(a + val + b + '=' + d);
                break;
            case '*':
                let f = (a * b);
                JSON.stringify(f);
                document.getElementById('res').value = f;
                operacie2.push(a + val + b + '=' + f);
                operacie.push(a + val + b + '=' + f);
                break;
            case '/':
                let o = (a / b);
                JSON.stringify(o);
                document.getElementById('res').value = o;
                operacie2.push(a + val + b + '=' + o);
                operacie.push(a + val + b + '=' + o);
                break;
        }

        if(operacie.length > 4) {
            operacie.splice(0, 1);
        }

        if(Divcont.childElementCount > 4) {
            Divcont.removeChild(Divcont.lastChild);
        }

        localStorage.setItem('operacie', JSON.stringify(operacie));

        function addp(){
            let par = document.createElement('p');
            par.appendChild(document.createTextNode(operacie2));
            Divcont.prepend(par);
        }
        operacie2.forEach(addp);
}