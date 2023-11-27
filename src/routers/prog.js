const express = require("express");

const rutaProg = express.Router();
const datos = require("../../data/data.js");

rutaProg.get("/",(req,res)=>{
    res.setHeader("Content-type", "express.application/json");
    res.end(JSON.stringify(datos.prog));
})

rutaProg.post("/", (req, res) => {
    const nuevaCategoria = req.body.categoria;
    const nuevoCurso = {
        "titulo": req.body.titulo,
        "nivel": req.body.nivel
    };
    
    if (nuevaCategoria === "prog") {
        req.cursosData.prog.push(nuevoCurso);
    } else {}

    res.redirect("/cursos");
});

rutaProg.get("/:nivel",(req,res)=>{
    listaDeCursosPorNivel = datos.prog.filter(
        (c)=>c.nivel==req.params.nivel
    );
    res.setHeader("Content-type", "application/json");
    res.end(JSON.stringify(listaDeCursosPorNivel));
})


module.exports = rutaProg;