const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

const port = process.env.PORT || 8000;

const { dirname } = require("path/posix");

const staticPath = path.join(__dirname, "../public");
const template_Path = path.join(__dirname, "../templates/views");
const partials_Path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_Path);
hbs.registerPartials(partials_Path);
app.use(express.static(staticPath));

app.get("", (req, res) => {
    res.render("index");
});
app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});
app.get("*", (req, res) => {
    res.render("404page", {
        errorMsg: "Opps! Page Not Found"
    });
});


app.listen(8000, () => {
    console.log(`thi is listing your voice ${port}`);

});