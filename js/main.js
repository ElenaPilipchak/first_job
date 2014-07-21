$(function() {
    $( "#datepicker" ).datepicker();
});

function saveFormData() {
    var inputsArray = $("input")
    var resultString = ""
    for (var i=0; i<inputsArray.length; i++){
        resultString = resultString + inputsArray[i].value + "  "
    }
    $("textarea")[0].value = resultString
}