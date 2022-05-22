function submitData(userName, email) {
    const userData = {
        'name': userName,
        'email': email
    };
    const body = document.querySelector('body');
    
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(resp => resp.json())
    .then(data => {
        const h2 = document.createElement('h2');
        h2.textContent = data.id;
        body.append(h2);
    })
    .catch(error => {
        const h2 = document.createElement('h2');
        h2.textContent = error.message;
        body.append(h2);
    })
}