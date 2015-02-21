var number_array = ['',''];
var entry_array = [];
var number_index = 0;
var operator = '';
var error = '';
var result = null;
var valid_operators = ['+','-','*','/'];

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
            result = add_numbers(parseInt(number_array[0]), parseInt(number_array[1]));
            break;
        case '-':
            result = subtract_numbers(parseInt(number_array[0]), parseInt(number_array[1]));
            break;
        case '*':
            result = multiply_numbers(parseInt(number_array[0]), parseInt(number_array[1]));
            break;
        case '/':
            result = divide_numbers(parseInt(number_array[0]), parseInt(number_array[1]));
            break;

    }
    operator = null;
    number_array['',''];

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
    entry_array.pop();
    
}




















