document.getElementById(numb1)

document.getElementById(numb2)

document.getElementById(calculate)


function BMI() {
    numb1=forms.first.value;
    numb2=forms.second.value;
    Display=numb1/((numb2*0.01)*(numb2*0.01));
    forms.Display.value=Display;
    //const sup=[18.5,24.9,29.9,30]
document.getElementById(check)
if (forms.Display.value<18.5){
    forms.status.value="Underweight";
}else if(forms.Display.value<25){
    forms.status.value="Normal weight";
}else if(forms.Display.value<30) {
    forms.status.value="Overweight"
}else{
    forms.status.value="Obese"
}
}

document.getElementById(re)
function clear(){
    forms.first.value=' ';
    forms.second.value=' ';
    forms.status.value=' ';
    forms.Display.value=' ';

}
    
