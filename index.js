const argv = require('./config/yargs').argv;
const colores = require('colors');
const porHacer = require('./por-hacer/por-hacer');



let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);

        //console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('-------------------'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('-------------------'.green);
        };

        //console.log('Listando Tarea');
        break;

    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(`Actualizando Tarea: ${actualizado}`);
        break;

    case 'borrar':
        let borrado = porHacer.borrarTareas(argv.descripcion);
        console.log(`Tarea Eliminada: ${borrado}`);
        break;

    default:
        console.log('Comando no es reconocido.');

}