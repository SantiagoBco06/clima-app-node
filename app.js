/**
 * 
 */

const colors = require('colors/safe');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias:'d',
        desc:'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async( direccion ) => {

    try{
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima( coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${ temp }ºC.`;    
    } catch( e ) {
        return `No se pudo deternubar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
.then( info => console.log( colors.green(info) )  )
.catch( error => console.log( colors.red(error) ) );
