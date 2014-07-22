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
function validate(form) {
    var a = document.forms["form"]["name"].value;
    var b = document.forms["form"]["surname"].value;
    var c = document.forms["form"]["e-mail"].value;
    var d = document.forms["form"]["password"].value;
    var e = document.forms["form"]["repeadpassword"].value;
    var f = document.forms["form"]["dateofbird"].value;
    var g = document.forms["form"]["phone"].value;
    var h = document.forms["form"]["countrytownregione"].value;
    var i = document.forms["form"]["name"].value;
    if (a.length == 0){
        document.getElementById('name').innerHTML = '*данное поле обязательно для заполнения';
        return false;
    }

    if (b.length==0){
        document.getElementById('surname').innerHTML='*данное поле обязательно для заполнения';
        return false;
    }
    if (c.length==0) {
        document.getElementById('e-mail').innerHTML = '*данное поле обязательно для заполнения';
        return false;
    }
    at=c.indexOf("@");
    dot=c.indexOf(".");
    if (at<1 || dot <1) {
        document.getElementById('e-mail').innerHTML = '*e-mail введен не верно';
        return false;
    }
    if (d.length==0){
        document.getElementById('password').innerHTML='*данное поле обязательно для заполнения';
        return false;
    }
    if (e.length==0){
        document.getElementById('repeadpassword').innerHTML='*данное поле обязательно для заполнения';
        return false;
    }
    if (d.length==0){
        document.getElementById('dateofbird').innerHTML='*данное поле обязательно для заполнения';
        return false;
    }
    if (f.length==0){
        document.getElementById('phone').innerHTML='*данное поле обязательно для заполнения';
        return false;
    }
    if (g.length==0){
        document.getElementById('countrytownregione').innerHTML='*данное поле обязательно для заполнения';
        return false;
    }
    if (i.length==0){
        document.getElementById('address').innerHTML='*данное поле обязательно для заполнения';
        return false;
    }
}