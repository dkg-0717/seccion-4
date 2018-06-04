const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    let data = '';

    console.log('========================'.cyan);
    console.log(`$tabla de ${base}`.white);
    console.log('========================'.cyan);

    return new Promise((resolve, reject) => {
        if (!Number(base) || typeof base == 'string') {
            reject(`el dato ${base} debe de ser un numero y no un ${typeof base}`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            resolve(`${base} * ${i} = ${base*i}\n`);
        }

    });
}

let crearArchivo = (base, limite) => {
    console.log(limite);
    return new Promise((resolve, reject) => {
        let data = '';
        let tipo = typeof base == 'string' ? true : false;
        console.log(tipo);

        if (!Number(base) || typeof base == 'string') {
            reject(`el dato ${base} debe de ser un numero y no un ${typeof base}`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${ base }-al-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}