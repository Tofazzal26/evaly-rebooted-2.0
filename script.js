
const inputValue = document.getElementById('inputValue');
const submitBtn = document.getElementById('submitBtn');
const userReview = document.getElementById('userReview');

let sum = 1;

submitBtn.addEventListener('click', function() {
    const values = inputValue.value.trim();
   if( values.length > 0) {
    const para = document.createElement('p');
    para.innerText = sum + '. ' + values;
    para.classList.add('paragraph');
    userReview.appendChild(para);
    inputValue.value = '';
    sum++
   }
})


inputValue.addEventListener('keyup', function(event) {

            const values = inputValue.value.trim();
    if( event.key === 'Enter' && values.length > 0) {
            const para = document.createElement('p');
            para.innerText = sum + '. ' + values;
            para.classList.add('paragraph');
            userReview.appendChild(para);
            inputValue.value = '';
            sum++
    }
})




