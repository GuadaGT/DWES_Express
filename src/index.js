const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

let cursosData = {
    prog: require("../data/data.js").prog,
    mates: require("../data/data.js").mates
};

app.use((req, res, next) => {
    req.cursosData = cursosData;
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));

const rProg = require("./routers/prog.js");
app.use("/api/cursos/prog", rProg);

const rMat = require("./routers/mates.js");
app.use("/api/cursos/mates", rMat); 

app.get("/cursos", (req, res) => {
    res.render("../views/pages/cursos.ejs", { misdatosProg: req.cursosData.prog, misdatosMat: req.cursosData.mates });
});

app.use("/", express.static("./archivos_estaticos"));

app.listen(process.env.PORT || 3000, () => console.log(`Servidor iniciado en ${process.env.PORT || 3000}`));