let pallu = document.getElementById('cringekamalesh');

function buttontoggel(){
    if (pallu.classList.contains('hidden')) {
        pallu.classList.remove('hidden')
    }else{
        pallu.classList.add('hidden')
    }
}

let form = document.getElementById('form');
let username = document.getElementById('name');

let name_error = document.getElementById('nameerror');

let email = document.getElementById('email');
let emailerror = document.getElementById('emailerror');
let message = document.getElementById('message');
let messageerror = document.getElementById('messageerror');




// form.addEventListener('submit', (e) => {
   
//         if (username.value.length === 0) {
            
//             name_error.innerHTML = "this field is required";
//             return false;

            
//         } if (email.value > 0 ) {
           
//             emailerror.innerHTML = "this field is required";
//             return false;
//         } if (message.value > 0){
//             e.preventDefault();
//             messageerror.innerHTML = "this fiels is require";
//             return false;
//         }
       
            
// });

function validate() {
    if (username.value.length === 0) {
        name_error.innerHTML = "This fied is required"

        return false;
    }
    if (email.value.length === 0) {
        emailerror.innerHTML = "This fied is required"
        return false;
    }
    if (message.value.length === 0) {
        messageerror.innerHTML = "This fied is required"
        return false;
    }
    else{
        alert("done")
    }
    
}



