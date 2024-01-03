function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        }, 
        body: JSON.stringify({
            name: name,
            email: email,
        })
})
    .then((response) => response.json())
    .then(function(data) {
        const body = document.body;
        console.log(body);
        body.innerHTML = data.id;
    })
    .catch( function(error) {
        error.message = 'Unauthorized Access';
        const body = document.body;
        console.log(body);
        body.innerHTML = error;
    })
};

submitData("dan", "dan.oswald32@gmail.com");


