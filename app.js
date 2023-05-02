(function (){

    let result = document.querySelector('.result');
    let buttons = document.querySelectorAll ('.btn');
    let clear = document.querySelector ('.btn-clear');
    let equal = document.querySelector ('.btn-equal');

    buttons.forEach(function (button){

        button.addEventListener('click', function (e){
            let value = e.target.dataset.num;
            result.value += value;
        })
    });

    equal.addEventListener('click', function(e){
        if(result.value === ''){
            result.value = "";

        }else{
            
            try {
                let answer = math.evaluate(result.value);
                result.value = answer;
            } catch (error) {
                result.value = "Invalid input";
                return result.value = "";
            }
        }
    });

    clear.addEventListener('click', function(e){

            result.value = "";

    });


})();