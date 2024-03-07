fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    console.log(data);
    for (let i = 0; i < 10; i++) {
        let h1 = document.createElement('h1');
        h1.textContent = data[i].id + ' ' + data[i].name;
        Comment.appendChild(h1);

        let h2 = document.createElement('h2');
        h2.textContent = data[i].email;
        Comment.appendChild(h2);

        let p = document.createElement('p');
        p.textContent = data[i].body;
        Comment.appendChild(p);
    }
})
.catch(e => console.log(e));