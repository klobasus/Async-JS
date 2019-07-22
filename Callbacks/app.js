const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            console.log(undefined, data);
        } else if (request.readyState === 4) {
            console.log('Could not fetch data', data);
        }
    });
    request.open("GET", resource);
    request.send();

};

// Callback 
getTodos("../todos/lukas.json", (err, data) => {
    console.log(data);
    getTodos("../todos/honza.json", (err, data) => {
        console.log(data);
        getTodos("../todos/tomas.json", (err, data) => {
            console.log(data);
        });
    });
});