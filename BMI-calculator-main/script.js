const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    if((height === '') || (height < 0) || (isNaN(height))){
        results.innerHTML = "Please provide a valid height";  //NaN !== NaN
        
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please provide a valid weight";
    } else {
    //calculate BMI
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>` //display the results
    }
    
    
});

//function bmi(weight, height) {
  //const $ = weight / height**2;
  //return $ <= 18.5 ? 'Underweight' : $ <= 25.0 ? 'Normal' : $ <= 30.0 ? 'Overweight' : 'Obese';
//}

