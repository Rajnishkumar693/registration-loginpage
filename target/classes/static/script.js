document
.getElementById("signupForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const user = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        mobile: document.getElementById("mobile").value,

        password: document.getElementById("password").value
    };

    const response = await fetch(
        "/api/users/signup",
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(user)
        }
    );

    if(response.ok){
        alert("Signup Successful");
    }
    else{
        alert("Signup Failed");
    }

});