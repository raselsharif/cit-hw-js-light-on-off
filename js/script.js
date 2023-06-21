

// let passHide=document.querySelector(".pass_hide");

// passShow.addEventListener("click" ,function(){
    //     pass.type="text";
    // })
// passHide.addEventListener("click" ,function(){
    //     pass.type="password";
    // })
    
    let pass=document.querySelector(".pass");
    let passShow=document.querySelector(".btn");

    passShow.addEventListener("click", function(){
        if (pass.type=="password"){
            pass.type="text"
            passShow.innerHTML='<i class="fa-solid fa-eye-slash"></i>'
        }else{
            pass.type="password"
            passShow.innerHTML='<i class="fa-solid fa-eye"></i>'
        }
    })