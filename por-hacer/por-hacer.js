const fs = require('fs');


let listadoPorHacer = [];

const leerDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch {
        listadoPorHacer = [];
    };
};

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar');
    });
};


const crear = (descripcion) => {
    leerDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;

};

const getListado = () => {
    leerDB();
    return listadoPorHacer;
};

const borrarTareas = (desc) => {
    leerDB();

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== desc;
    });

    if (nuevoListado.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    };

};

const actualizar = (descripcion, completado = true) => {
    leerDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    };

};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrarTareas
};