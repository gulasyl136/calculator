let num1 = parseInt(prompt("Write first number"));
let operator = prompt("Write an operator(+, -, *, /):")
let num2 = parseInt(prompt("Write next number"));
switch (operator) {
    case '+':
        alert(num1 + num2);
        break;
    case '-':
        alert(num1 - num2);
        break;
    case '*':
        alert(num1 * num2);
        break;
    case '/':
        alert(num1 / num2);
        break;
    default:
        alert('NO');
        
}



