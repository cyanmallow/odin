document.addEventListener('DOMContentLoaded', function(){
    let display = document.getElementById('display');
    let buttons = document.querySelectorAll('button');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let buttonValue = e.target.value;

            switch (buttonValue) {
                case 'reset':
                    display.innerText = '0';
                    break;
                case '=':
                    display.innerText = eval(display.innerText).toString(); 
                    break;
                default:
                    if (display.innerText==0){
                        display.innerText = buttonValue;
                    }
                    else {
                        display.innerText += buttonValue;
                    }
                    break;
            }
        })
    });
})