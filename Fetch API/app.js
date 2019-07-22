const getTodos = resource => {

    fetch(resource).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });

};

getTodos('../todos/lukas.json');
getTodos('../todos/honza.json');
getTodos('../todos/tomas.json');