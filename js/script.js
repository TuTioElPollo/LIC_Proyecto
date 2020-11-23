function onClick(){
    console.log("Funciono aquí");
    var cateTipicos = document.getElementById("menuItem1");
    var cateDesayunos = document.getElementById("menuItem2");
    var cateAlmuerzos = document.getElementById("menuItem3");
    var cateCenas = document.getElementById("menuItem4");
    var cateBebidas = document.getElementById("menuItem5");
    var foodText1 = document.getElementById("foodText1");
    var foodText2 = document.getElementById("foodText2");
    var foodText3 = document.getElementById("foodText3");
    var foodText4 = document.getElementById("foodText4");

    if(cateTipicos.addEventListener){
        cateTipicos.addEventListener("click", function(){
            document.getElementById("food1").src = "/images/Tipicos/pupusa1.jpeg";
            document.getElementById("food2").src = "/images/Tipicos/tamales.jpg";
            document.getElementById("food4").src = "/images/Tipicos/empanadas.jpg";
            document.getElementById("food5").src = "/images/Tipicos/pupusas.jpg";
            foodText1.innerHTML = "Pupusas con una gran variedad de ingredientes frescos y de la mejor cálidad.";
            foodText2.innerHTML = "Nuegados con miel 100% hecha naturalmente y con el mejor sabor.";
            foodText3.innerHTML = "Empanadas con las variedades típicas que tan reconocibles y deliciosos los caracterízan.";
            foodText4.innerHTML = "Shuco con sabor 100% salvadoreño con los agregados al gusto del cliente.";
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
            document.getElementById("food4").src = "/images/Desayunos/waffles.jpeg";
            document.getElementById("food5").src = "/images/Desayunos/huevos_platano.jpg";
            foodText1.innerHTML = "Omelettes con ricos ingredientes de suave procedencia, como la de su país originario.";
            foodText2.innerHTML = "Pancakes suaves con margarina y moras, la combinación perfecta de sabores para el desayuno";
            foodText3.innerHTML = "Waffles de alta cálidad con la pizca adecuada de miel y mantequilla importada.";
            foodText4.innerHTML = "Desayuno típico del país, nada como los clásicos, misma calidad, mismo sabor.";
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
            document.getElementById("food4").src = "/images/Almuerzos/Almuerzo4.jpg";
            document.getElementById("food5").src = "/images/Almuerzos/Almuerzo5.jpg";
            foodText1.innerHTML = "Pez frito originario de los estanques locales, donde usted mismo puede elegir el espécimen.";
            foodText2.innerHTML = "Pechuga de pollo críado en los campos nacionales, término a elección del cliente.";
            foodText3.innerHTML = "Sopa de Res con la cantidad exacta de ingredientes alimenticios para la salud.";
            foodText4.innerHTML = "Sopa de Tortilla con la mejor consistencia para la degustación del cliente, como hecha en casa.";
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
            document.getElementById("food4").src = "/images/Cenas/Cena4.jpg";
            document.getElementById("food5").src = "/images/Cenas/Cena5.png";
            foodText1.innerHTML = "Cena típica, la comida ideal para culminar un día de la mejor manera.";
            foodText2.innerHTML = "Panes con Pollo, por que no es necesario esperar hasta fin de año para probar su delicioso sabor.";
            foodText3.innerHTML = "Cena Royale, con todos los ingredientes que el cliente solicite, por que comer como un rey es bueno.";
            foodText4.innerHTML = "Cena Carnivora, la selección de nuestra mejor carne proveniente de campos nacionales, los mejores términos.";
        })
    }
    else{
        cateCenas.attachEvent("onclick", function(){
            alert("Cenas");
        })
    }

    if(cateBebidas.addEventListener){
        cateBebidas.addEventListener("click", function(){
            document.getElementById("food1").src = "/images/Bebidas/cafe.jpg";
            document.getElementById("food2").src = "/images/Bebidas/cebada.jpg";
            document.getElementById("food4").src = "/images/Bebidas/jamaica.jpg";
            document.getElementById("food5").src = "/images/Bebidas/shuco.jpg";
            foodText1.innerHTML = "Café con los mejores granos provenientes de la tierra del café, colombia país cafétero.";
            foodText2.innerHTML = "Cebada, el mejor sabor y alternativa a la típica horchata, con baja cantidad de azucares.";
            foodText3.innerHTML = "Agua de Jamaica,que parece de limón y sabe a tamarindo (Sabe a Jamaica).";
            foodText4.innerHTML = "Shuco con sabor 100% salvadoreño con los agregados al gusto del cliente.";
        })
    }
    else{
        cateBebidas.attachEvent("onclick", function(){
            alert("Bebi");
        })
    }

    var buttonsFood = document.getElementsByClassName("food-button");

    for(var i = 0; i < buttonsFood.length; i++){
        buttonsFood[i].addEventListener("click",function(){
            var myBasket = document.getElementById("carBasket");
            var cantidad = myBasket.innerHTML;
            myBasket.innerHTML = (parseInt(myBasket.innerHTML) + 1);
        }, false);
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