const express = require("express");

const app = express();

app.get("*", (request, response) => {
    response.send(request.path)
})

const port = 8081;

app.listen(port, () => {
    console.log(`server at: http://127.0.0.1:${port}`);
})
