const express = require("express");
const rutaMat = express.Router();
const datos = require("../../data/data.js");

rutaMat.get("/", (req, res) => {
    res.setHeader("Content-type", "application/json");
    res.end(JSON.stringify(datos.mates));
});

rutaMat.post("/", (req, res) => {
    const nuevaCategoria = req.body.categoria; 
    const nuevoCurso = {
        "titulo": req.body.titulo,
        "nivel": req.body.nivel
    };

    if (nuevaCategoria === "mates") {
        req.cursosData.mates.push(nuevoCurso);
    } else {}

    res.redirect("/cursos");
});

rutaMat.get("/:nivel", (req, res) => {
    const listadoDeCursosPorNivel = datos.mates.filter(
        (c) => c.nivel === req.params.nivel
    );
    res.setHeader("Content-type", "application/json");
    res.end(JSON.stringify(listadoDeCursosPorNivel));
});

module.exports = rutaMat;