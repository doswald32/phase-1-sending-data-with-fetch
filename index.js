let newData = document.createElement("li");

function submitData() {
    return fetch("http://localhost:3000/users", configurationObject)
    .then((response) => response.json())
    .then((data) => addData(data))
};

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }, 
    body: JSON.stringify({
        name: "Steve",
        email: "steve@steve.com",
    })
};

/*function addData(data) {
    const newElement = document.createElement("li");
    newElement.textContent = data;
    document.querySelector("form").appendChild(newElement);
    console.log(newElement);
}*/

submitData();


