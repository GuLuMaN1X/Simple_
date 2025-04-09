const hiddenText = document.getElementById('hidden-text');
const burgerBtn = document.getElementById('burger-btn');

burgerBtn.addEventListener('click', () =>{
    if (hiddenText.classList.contains('show') == true){
        hiddenText.classList.remove('show');   
    } 
    else{
        hiddenText.classList.add('show');
    }

});