function addition(a, b){
  var result = a + b;
  console.log(result);
};

function calculation(){
  var final_result;
  var number_1 = prompt("Enter first value");
  var number_2 = prompt("Enter second value");

  var mode = prompt("Enter the calculation sign");

  if(mode === "+"){
    final_result = parseInt(number_1) + parseInt(number_2);
  }
  else if(mode == "-"){
    final_result = parseInt(number_1) - parseInt(number_2);
    
  }
  else if(mode == "*"){
    final_result = parseInt(number_1) * parseInt(number_2);
    
  }
  else if(mode == "/"){
    final_result = parseInt(number_1) / parseInt(number_2);

  }else{
    final_result = "Please enter a valid calculation sign"
  }

  console.log(final_result)
}