const axios = require('axios');

const getClima = async (lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=d9f1cf73054fd79c7dc5ef6ef7234875`);
    if ( resp.data.status === 'ZERO_RESULTS' ) {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    }
    let temperature = resp.data.main.temp;
    return temperature;
};

module.exports = {
    getClima,
}