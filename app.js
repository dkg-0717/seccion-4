// const fs = required('express');
// const fs = required('./fs');
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

const argv = require('./config/yargs').argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`tabla del ${colors.cyan(argv.base)}`))
            .catch(err => console.log(err));
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`el archivo tabla-${archivo} ha sido creado`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido');
}
console.log(argv);
// let param = argv[2];
// let base = parseInt(param.split('=')[1]);