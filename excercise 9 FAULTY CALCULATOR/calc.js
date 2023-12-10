let value_1 = +prompt('enter first value');
let value_2 = +prompt('enter second value');
let opretor = prompt('enter operator + - * /');

let fault = Math.floor(Math.random() * 100);

let result;

if (fault < 90) {
    switch (opretor) {
        case "+":
            result = value_1 + value_2;
            break;

        case "-":
            result = value_1 - value_2;
            break;

        case "*":
            result = value_1 * value_2;
            break;
        
        case "/":    
            result = value_1 / value_2;
            break;
    }

    alert('Result : '+result);
}

else if(fault >= 90){
    switch (opretor) {
        case "+":
            result = value_1 - value_2;
            break;

        case "-":
            result = value_1 / value_2;
            break;

        case "*":
            result = value_1 + value_2;
            break;
        
        case "/":    
            result = value_1 ** value_2;
            break;
    }

    alert('Result : '+result);
}