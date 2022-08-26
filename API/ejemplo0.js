const data = {
    username: 'Listo',
    email: 'john@doe.com'
}

fetch(
    'http://example.com/data.json',
{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))