document
.getElementById("loginForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const loginData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    const response = await fetch(
        "/api/users/login",
        {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(loginData)
        }
    );

    const result = await response.text();

    if(response.ok){
        alert(result);
        window.location.href = "/dashboard.html";
    }else{
        alert(result);
    }

});