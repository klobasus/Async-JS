const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject("Error getting resource");
            }
        });
        request.open("GET", resource);
        request.send();
    });

};

getTodos("todos/lukas.json").then(data => {
    console.log("Promise 1 resolved:", data);
    return getTodos("todos/honza.json");
}).then(data => {
    console.log("Promise 2 resolved:", data);
    return getTodos("todos/tomas.json");
}).then(data => {
    console.log("Promise 3 resolved:", data);
}).catch(err => {
    console.log("Promise rejected: ", err);
});

// Callback 
/*getTodos("todos/lukas.json", (err, data) => {
    console.log(data);
    getTodos("todos/honza.json", (err, data) => {
        console.log(data);
        getTodos("todos/tomas.json", (err, data) => {
            console.log(data);
        });
    });
});*/

// Promises
/* const getSomething = () => {
    return new Promise((resolve, reject) => {
        //resolve("some data");
        reject("some error");
    });
}; */

/* getSomething().then(data => {
    console.log(data);
}, (err) => {
    console.log(err);
}); */

/* getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
}); */