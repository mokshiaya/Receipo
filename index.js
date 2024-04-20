
function search() {
    // var check = document.getElementById("main-section"); 

    
    var input = document.querySelector('input[type="text"]');
    var inputValue = input.value.toLowerCase(); 
    hideAllSections();

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
document.addEventListener('DOMContentLoaded', function() {
    hideAllSections();
});

function displaycbm(){
    hideAllSections();
    document.querySelector('.section-5').style.display = "block"; 

}
function displaymomos(){
    hideAllSections();
    document.querySelector('.section-6').style.display = "block"; 

}
function displaycake(){
    hideAllSections();
    document.querySelector('.section-7').style.display = "block"; 

}
function hideAllSections() {
    var sections = document.querySelectorAll('.section-2, .section-3, .section-4, .section-5, .section-6, .section-7');
    sections.forEach(section => {
        section.style.display = "none";
    });
}

function Close(containerId) {
    var recipeContainers = document.querySelectorAll('.section-2, .section-3, .section-4, .section-5, .section-6, .section-7');
    recipeContainers.forEach(function(container) {
        container.style.display = "none";
    });
var input = document.querySelector('input[type="text"]');
    input.value = "";
}
hideAllSections();

// function search() {
//     var input = document.querySelector('input[type="text"]');
//     var inputValue = input.value.toLowerCase();

    
//     hideAllSections();

//     var recipeSection;
//     switch (inputValue) {
//         case "pizza":
//             recipeSection = document.querySelector('.section-2');
//             break;
//         case "veg biryani":
//             recipeSection = document.querySelector('.section-3');
//             break;
//         case "momos":
//             recipeSection = document.querySelector('.section-6');
//             break;
//         case "cake":
//             recipeSection = document.querySelector('.section-7');
//             break;
//         case "chicken hakka noodles":
//             recipeSection = document.querySelector('.section-4');
//             break;
//         case "chicken butter masala":
//             recipeSection = document.querySelector('.section-5');
//             break;
//         default:
//             alert("No recipe found for this search term.");
//             return;
//     }

    
//     if (recipeSection) {
//         recipeSection.style.display = "block";
//     }
// }
// document.addEventListener('DOMContentLoaded', function() {
//     hideAllSections(); 
// });

// function hideAllSections() {
//     var sections = document.querySelectorAll('.section-2, .section-3, .section-4, .section-5, .section-6, .section-7');
//     sections.forEach(section => {
//         section.style.display = "none";
//     });
// }

// function displaycbm() {
//     hideAllSections();
//     document.querySelector('.section-5').style.display = "block";
// }

// function displaymomos() {
//     hideAllSections();
//     document.querySelector('.section-6').style.display = "block";
// }

// function displaycake() {
//     hideAllSections();
//     document.querySelector('.section-7').style.display = "block";
// }

// function Close(containerId) {
//     var recipeContainers = document.querySelectorAll('.section-2, .section-3, .section-4, .section-5, .section-6, .section-7');
//     recipeContainers.forEach(function(container) {
//         container.style.display = "none";
//     });

//     var input = document.querySelector('input[type="text"]');
//     input.value = "";
// }
