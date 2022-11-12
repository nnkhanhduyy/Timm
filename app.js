const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');

form.addEventListener('submit', (event)=>{
    
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
         event.preventDefault();
     }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
} 

function validateForm() {
    //USERNAME
    if(usernameInput.value.trim()==''){
        setError(usernameInput, 'Bé điền họ tên vào đây');
    }else if(usernameInput.value.trim()=='Đoàn Minh Anh' || usernameInput.value.trim()=='Đoàn Minh Anh'){
        setSuccess(usernameInput);
    }else {
        setError(usernameInput, 'Điền đúng vào nèo:~');
    }
    //TITLE
    if(titleInput.value.trim()==''){
        setError(titleInput, 'Phải điền cả cái này nữa :v');
}else if(titleInput.value.trim()=='16/06/2022' || titleInput.value.trim()=='16/06/2022'){
        setSuccess(titleInput);
    }else {
        setError(titleInput, 'Bé quên ngày này rồi à :((');
    
    }

}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}





