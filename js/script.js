function onClick(){
    console.log("Funciono aquí");
    var cateTipicos = document.getElementById("menuItem1");
    var cateDesayunos = document.getElementById("menuItem2");
    var cateAlmuerzos = document.getElementById("menuItem3");
    var cateCenas = document.getElementById("menuItem4");
    var cateBebidas = document.getElementById("menuItem5");

    if(cateTipicos.addEventListener){
        cateTipicos.addEventListener("click", function(){
            document.getElementById("food1").src = "/images/Tipicos/pupusa1.jpeg";
            document.getElementById("food2").src = "/images/Tipicos/tamales.jpg";
            document.getElementById("food3").src = "/images/Tipicos/nuegados.jpg";
            document.getElementById("food4").src = "/images/Tipicos/empanadas.jpg";
            document.getElementById("food5").src = "/images/Tipicos/pupusas.jpg";
        })
    }
    else{
        cateTipicos.attachEvent("onclick", function(){
            alert("Tipicos");
        })
    }

    if(cateDesayunos.addEventListener){
        cateDesayunos.addEventListener("click", function(){
            document.getElementById("food1").src = "/images/Desayunos/omelette.jpg";
            document.getElementById("food2").src = "/images/Desayunos/pancakes.jpg";
            document.getElementById("food3").src = "/images/Desayunos/tocino.jpg";
            document.getElementById("food4").src = "/images/Desayunos/waffles.jpeg";
            document.getElementById("food5").src = "/images/Desayunos/huevos_platano.jpg";
        })
    }
    else{
        cateDesayunos.attachEvent("onclick", function(){
            alert("Desa");
        })
    }

    if(cateAlmuerzos.addEventListener){
        cateAlmuerzos.addEventListener("click", function(){
            document.getElementById("food1").src = "/images/Almuerzos/almuerzo1.jpg";
            document.getElementById("food2").src = "/images/Almuerzos/Almuerzo2.jpg";
            document.getElementById("food3").src = "/images/Almuerzos/Almuerzo3.jpg";
            document.getElementById("food4").src = "/images/Almuerzos/Almuerzo4.jpg";
            document.getElementById("food5").src = "/images/Almuerzos/Almuerzo5.jpg";
        })
    }
    else{
        cateAlmuerzos.attachEvent("onclick", function(){
            alert("Almu");
        })
    }

    if(cateCenas.addEventListener){
        cateCenas.addEventListener("click", function(){
            document.getElementById("food1").src = "/images/Cenas/Cena1.jpg";
            document.getElementById("food2").src = "/images/Cenas/Cena2.jpg";
            document.getElementById("food3").src = "/images/Cenas/Cena3.jpeg";
            document.getElementById("food4").src = "/images/Cenas/Cena4.jpg";
            document.getElementById("food5").src = "/images/Cenas/Cena5.png";
        })
    }
    else{
        cateCenas.attachEvent("onclick", function(){
            alert("Cenas");
        })
    }

    if(cateBebidas.addEventListener){
        cateBebidas.addEventListener("click", function(){
            document.getElementById("food1").src = "/images/Bebidas/café.jpg";
            document.getElementById("food2").src = "/images/Bebidas/cebada.jpg";
            document.getElementById("food3").src = "/images/Bebidas/horchata.jpg";
            document.getElementById("food4").src = "/images/Bebidas/jamaica.jpg";
            document.getElementById("food5").src = "/images/Bebidas/shuco.jpg";
        })
    }
    else{
        cateBebidas.attachEvent("onclick", function(){
            alert("Bebi");
        })
    }
}

function changeCategory(number){
    switch(number){
        case "0":
            alert("Le dió a la categoría típicos");
            break;
        case "1":
            alert("Le dió a la categoría desayunas");
            break;
        case "2":
            alert("Le dió a la categoría almuerzos");
            break;
        case "3":
            alert("Le dió a la categoría cenas");
            break;
        case "4":
            alert("Le dió a la categoría bebidas");
            break;       
    }
}

if(window.addEventListener){
    window.addEventListener("load", onClick);
}
else{
    window.attachEvent("onload", onClick);
}