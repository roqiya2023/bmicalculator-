//BMI=WEIGHT/HEIGHT^2
//cache the dom
const heightInputEl = document.getElementById('height');
const weightInputEl = document.querySelector('#weight');

const output= document.querySelector('.output');
const form= document.querySelector('.form');
const metricRadio=document.querySelector('#metric');
const imperialRadio=document.querySelector('#imperial');

function calculateBmi(){
    let height=parseFloat(heightInputEl.value) ;
    const weight=parseFloat(weightInputEl.value) ;
    let bmi;

  if(metricRadio.checked){
    height=height/100;
    bmi=weight/(height*height);
   
}else if(imperialRadio.checked){
    bmi=703*weight/(height*height);
   
}
   if(bmi<18.5){
    output.textContent=`Your BMI is ${bmi.toFixed(2)} and you are underweight`;
    output.style.color='red';
   }
    else if(bmi>=18.5 && bmi<=24.9){
        output.textContent=`Your BMI is ${bmi.toFixed(2)} and you are normal`;
        output.style.color='#22ec25';
    }
    else if(bmi>=25 && bmi<=29.9){
        output.textContent=`Your BMI is ${bmi.toFixed(2)} and you are overweight`;
        output.style.color='orange';
    }
    else if(bmi>=30){
        output.textContent=`Your BMI is ${bmi.toFixed(2)} and you are obese`;
        output.style.color='red';
    }
    else{
        output.textContent=`Please enter valid values`;
        output.style.color='red';
    }
}
function updatePlaceholders(){
    if(metricRadio.checked){
        heightInputEl.placeholder='cm';
        weightInputEl.placeholder='kg';
    }else if(imperialRadio.checked){
        heightInputEl.placeholder='in';
        weightInputEl.placeholder='lbs';
    }
}

//console.log(calculateBmi())

heightInputEl.addEventListener('input',calculateBmi)
weightInputEl.addEventListener('input',calculateBmi)

metricRadio.addEventListener('change',()=>{
    heightInputEl.value='';
    weightInputEl.value='';
    output.textContent='';
    updatePlaceholders();
})

imperialRadio.addEventListener('change',()=>{
    heightInputEl.value='';
    weightInputEl.value='';
    output.textContent='';
    updatePlaceholders();
})


form.addEventListener('submit',function(e){
    e.preventDefault();
  
})