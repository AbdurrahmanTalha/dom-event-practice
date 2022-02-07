

  function makeRed(){
    document.body.style.backgroundColor="red";
}

const blueButton=document.getElementById('make-blue-button');
console.log(blueButton);
blueButton.onclick=makeBlue;

function makeBlue(){
    document.body.style.backgroundColor="blue";
}

const greenButton=document.getElementById('make-green-button');
greenButton.onclick=function (){
    document.body.style.backgroundColor='green';
}

const goldenButton=document.getElementById('make-goldenrod');
goldenButton.addEventListener('click',makeGoldenrod);


function makeGoldenrod(){
    document.body.style.backgroundColor='goldenrod'
}

const hotpinkButton=document.getElementById('make-hotpink');
hotpinkButton.addEventListener('click', function(){
    document.body.style.backgroundColor='hotpink';
})
 
document.getElementById('make-lightblue').addEventListener('click',function(){
  document.body.style.backgroundColor='lightblue';
})
