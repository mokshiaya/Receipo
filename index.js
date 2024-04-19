function search() {
    // var check = document.getElementById("main-section"); 

    
    var input = document.querySelector('input[type="text"]');
    var inputValue = input.value.toLowerCase(); 
    show();

    if (inputValue === "pizza") { 
        
        var recipeSection = document.querySelector('.section-2'); 
        recipeSection.style.display = "block"; 
    }
    else if (inputValue === "veg biryani") { 
        var recipeSection = document.querySelector('.section-3'); 
        recipeSection.style.display = "block"; 
    } else if (inputValue === "momos") { 
        var recipeSection = document.querySelector('.section-6'); 
        recipeSection.style.display = "block"; 
    } else if (inputValue === "cake") { 
        var recipeSection = document.querySelector('.section-7'); 
        recipeSection.style.display = "block"; 
    } 
    else if (inputValue === "chicken hakka noodles") { 
        var recipeSection = document.querySelector('.section-4'); 
        recipeSection.style.display = "block"; 
    } 
    else if (inputValue === "chicken butter masala") { 
        var recipeSection = document.querySelector('.section-5'); 
        recipeSection.style.display = "block"; 
    } 
    else {
        alert("No recipe found for this search term."); 
    }
}
function displaycbm(){
    show();
    document.querySelector('.section-5').style.display = "block"; 

}
function displaymomos(){
    show();
    document.querySelector('.section-6').style.display = "block"; 

}
function displaycake(){
    show();
    document.querySelector('.section-7').style.display = "block"; 

}
function Close(){
    if(document.querySelector('.section-2').style.display=="block" || document.querySelector('.section-3').style.display=="block" || document.querySelector('.section-4').style.display=="block"  || document.querySelector('.section-5').style.display=="block"  || document.querySelector('.section-6').style.display=="block"|| document.querySelector('.section-7').style.display=="block" ){
        document.getElementById("main-section").style.display="none";
    }
}
function show(){
    if(document.getElementById("main-section").style.display="none"){
        document.getElementById("main-section").style.display="block"; 
    }
}