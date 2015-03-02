$(document).ready(function() {
    console.log('ready!');
});



var number_array = ['',''];
var entry_array = [];
var number_index = 0;
var operator = '';
var error = '';
var result = null;
var valid_operators = ['+','-','*','/'];


function togglestyle(el){
    var blackdrop = document.createElement('div').classList.add('blackdrop');
    var container = document.getElementById('contains');
    var allElements = document.querySelectorAll('div > div');
    if(el.className == "on") {
        el.className="off";

    } else {
        el.className="on";
        $('.contains').fadeOut();
    }
}






function add_numbers(num1, num2){
                return(num1 + num2);
        }

function subtract_numbers(num1, num2){
                return(num1 - num2);
        }

function multiply_numbers(num1, num2){
                return(num1 * num2);
        }

function divide_numbers(num1, num2){
                if (num2 > 0) {
                    //confirm("Divided equals " + (parseFloat(num1) / parseFloat(num2)));
                    return(num1 / num2);
                } else {
                    alert('you cannot divide by zero');
                    return false;
                }
        }

function process_equation() {
    var num_index = 0;
    for(var i = 0; i < entry_array.length; i++){
        if(!isNaN(parseFloat(entry_array[i]))) {
            number_array[num_index]=entry_array[i];
            if (num_index==1 && operator!=null){
                calculate();
                num_index=0;
            }
        }
        else if(valid_operators.indexOf(entry_array[i])!==-1){
            if(num_index==0 && result!=null){
                number_array[0]=result;
                result=null;
            }
            operator=entry_array[i];
            num_index++; 
        }
        else {
            alert("You broke the interwebs");
        }
    }
}

function calculate() {

    switch(operator) {
        case '+':
            result = add_numbers(parseFloat(number_array[0]), parseFloat(number_array[1]));
            break;
        case '-':
            result = subtract_numbers(parseFloat(number_array[0]), parseFloat(number_array[1]));
            break;
        case '*':
            result = multiply_numbers(parseFloat(number_array[0]), parseFloat(number_array[1]));
            break;
        case '/':
            result = divide_numbers(parseFloat(number_array[0]), parseFloat(number_array[1]));
            break;

    }
    operator = null;
    number_array = ['',''];

    document.querySelector('#result').value=result;

}

function reset_calculator() {
    document.querySelector('#input').value='';
    document.querySelector('#result').value='';
    number_array=['',''];
    entry_array=[];
    number_index=0;
}

function add_number(digit) {
    if(typeof entry_array[number_index]=='undefined') {
    entry_array[number_index]='';
    } 
    if (result!==null) {
        result = null;  
        document.querySelector('#result').value='';
    } 
    document.querySelector('#input').value+=digit;
    entry_array[number_index]+=digit;
}

function add_operator(input_operator) {

    document.querySelector('#input').value+=input_operator;
    number_index++;
    entry_array[number_index]=input_operator;
    number_index++;

}

function clear_c(){
    document.querySelector('#input').value='';
    document.querySelector('#result').value='';
    number_array=['',''];
    number_index=0;
}

function clear_ce() {
    var inputArray = document.querySelector('#input').value.split("");
    inputArray.pop();
    document.querySelector('#input').value = inputArray.join("");
    entry_array.pop();
}

function add_neg(negative) {

    var smartArray = document.querySelector('#input').value.split("");
    var insertNeg = smartArray.pop();
    var lastNumber = entry_array.pop();

    if (lastNumber == '+' || lastNumber == '*' || lastNumber == '/') {
        alert('First, enter the number you want to make negative, then press ' + document.querySelector('#neg').innerHTML);
        clear_c();
        entry_array = [];
    } else {
        insertNeg = (insertNeg * -1).toString();
        smartArray.push(insertNeg);
        document.querySelector('#input').value = smartArray.join("");

        lastNumber = (lastNumber * -1).toString();
        entry_array.push(lastNumber);
    }
}



















