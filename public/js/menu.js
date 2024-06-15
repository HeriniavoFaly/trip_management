// let btnClient = document.querySelectorAll('.navMenu a');
// let phBienv = document.querySelector('.phBienv p');
// let formType = formContainer.children;
// let currentForm = 0; //0:client , 1: voiture,2:place, 3: reserver
let formContainer = document.querySelector('.form');
let menuCont = document.querySelector(".menu");
const editBoxContainers = document.querySelectorAll(".parentContainer");
const iconEdits = document.querySelectorAll('.iconEdit');

    let widthMilay = menuCont.firstElementChild.offsetWidth;
    let menuVarHeigth = formContainer.firstElementChild.offsetHeight;

    menuCont.style.width = widthMilay+'px';
    formContainer.style.height = menuVarHeigth+'px';
    let menuH = menuVarHeigth + formContainer.previousElementSibling.previousElementSibling.offsetHeight;
    menuCont.style.height = menuH+'px';

    console.log(formContainer.firstElementChild.classList);


iconEdits.forEach((icon)=>{
    icon.addEventListener('click', ()=>{
        const secondClass = icon.classList[1]; // 2em class
        const numLine = secondClass.substring(4, secondClass.length); //  ex: class = "any line1" ; c'est le nombre qui suive line qu'on veut
        
        showEditBox(numLine);
    });
});

let showEditBox = (numLine)=>{
    editBoxContainers[numLine].style.display = "block";

    const btnCancel = document.getElementById(`cancelBtn${numLine}`);

    btnCancel.addEventListener('click', ()=>{
        hideEditBox(editBoxContainers[numLine]);
    });
};

function hideEditBox(editBoxContainer){
    editBoxContainer.style.display ="none";
}



/* ----------------------------------------------------------------------------------------------------------- */

    
//     btnClient.forEach((btn, id)=>{
//         btn.addEventListener('click', function(){
            
//             firstShown(id);
            
//         }); 
        
//     });


// function firstShown(curAsked)
// {
//     let widthMilay, heightMilay;//the width property of the linearG as the only elt in menu
//     menuCont.firstElementChild.style.width = 'fit-content';
//     menuCont.previousElementSibling.style.display = 'flex'
//     menuCont.previousElementSibling.classList.add('fadeOut');
//     menuCont.parentElement.style.margin = 'auto';
//     phBienv.style.display= 'none';
    
//     for(let i=0; i<btnClient.length; i++)
//     {
//         btnClient[i].style.width = 'max-content';
//         btnClient[i].style.height = 'auto';
//         btnClient[i].style.margin='10px 13px';
//         btnClient[i].style.padding = '5px 7px';
//     }
    
//     formContainer.style.width= '70%';
//     formContainer.style.display='flex';

//     widthMilay = menuCont.firstElementChild.offsetWidth;

//     menuCont.style.width = widthMilay+'px';
    
//     show(currentForm, curAsked);
//     currentForm = curAsked;

//     // heightMilay = menuCont.nextElementSibling.offsetHeight;

//     // menuCont.parentElement.style.height = heightMilay+'px';
//     // menuCont.style.height = heightMilay+'px';
// }

// function show(curShown, curAsked)
// {
    
//     if(curAsked !== curShown)
//     {
//         console.log(curShown+"milay"+curAsked);
//         formType[curShown].style.opacity='0';
//         formType[curShown].style.zIndex='1';
//         formType[curShown].classList.replace("fadeOut", "fadeIn");
        
//         formType[curAsked].classList.replace("fadeIn", "fadeOut");
//         formType[curAsked].style.opacity = "1";
//         formType[curAsked].style.zIndex = "2";
        
        
//     }
//     else
//     {
//         formType[curAsked].classList.replace("fadeIn", "fadeOut");
//         formType[curAsked].style.opacity = "1";
//         formType[curAsked].style.zIndex = "2";
//     }
       
// }


