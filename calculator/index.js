function appendToResult(value) {
    var result = document.getElementById("result");
    result.value += value;
  }
  
  function calculateResult() {
    var result = document.getElementById("result");
    result.value = eval(result.value);
  }
  
  function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
  }