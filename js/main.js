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

function validate (email) {

    if (email.valie.search(
/^([a-zA-Z]+([_\.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,4})+&/) == -1) {
        alert("Please type your email correctly");
        return false;
    }
}