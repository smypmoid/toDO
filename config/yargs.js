const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descipcion de la tarea"

}

const completado = {
    demand: true,
    alias: 'c',
    default: true,
    desc: "Marca como completado la tarea"
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('borrar', 'Borra un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .help()
    .argv;


module.exports = {
    argv
}