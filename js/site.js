const personas = [
    {dui: "11111111-1", nombre: "Marvin", apellido: "Hernandez", cant_armas: 16},
    {dui: "22222222-2", nombre: "Jose", apellido: "Fuentes", cant_armas: 10}
]

function validarNCaracteres(valor){
    if(typeof valor == "string"){
        if(valor.length == 10){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}

function validarFormulario(){
    let valor = document.forms["form-consulta"]["dui"].value;
    let msg = document.getElementById("msg");
    if(valor == "" || !validarNCaracteres(valor)){
        msg.innerText = "El campo DUI es invalido o nulo.";
    }else{
        let resultado = document.getElementById("resultado");
        resultado.removeAttribute("hidden");
        let persona = personas.filter(p => p.dui == valor);
        document.getElementById("nombre").innerHTML = persona[0].nombre;
        document.getElementById("apellido").innerHTML = persona[0].apellido;
        document.getElementById("carmas").innerHTML = persona[0].cant_armas;
    }
}

$(document).ready(function(){

$("#mayuda").click(function(){
    $("#divayuda").fadeIn(3000);
    $("#mayuda").hide();
    $("#oayuda").show();
})

$("#oayuda").click(function(){
    $("#divayuda").fadeOut(3000);
    $("#mayuda").show();
    $("#oayuda").hide();
})

$("#accion").click(function(){
   $("#contenido").load("demo/demo.txt")
})

});

// $.get(URL, callback);
// $.post(URL, { nombre: 'Edward', apellido: 'Lopez' }, callback);