const express = require("express");
const app = express();
const exphbs = require("express-handlebars")
const port = 8000;

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/associations/:name", (req, res) => {
    console.log(`req.params`, req.params)
    switch (req.params.name) {
        case "restau-du-coeur":
            res.render("restau_du_coeur", {
                image: "",
                name: "Restos du coeur",
                description: ""
            })
            break;
        case "konexio":
            res.render("konexio", {
                image: "",
                name: "Konexio",
                description: ""
            })
            break;
        case "la-croix-rouge":
            res.render("croix_rouge", {
                image: "",
                name: "Croix-rouge",
                description: ""
            })
            break;
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})