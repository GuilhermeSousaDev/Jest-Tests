const axios = require('axios');

const URL = 'https://jsonplaceholder.typicode.com/photos';

class EndPoint {
    static async getUrlPhoto() {
        const req = await axios.get(URL);
    
        return req.data.map(data => data.url);
    }

    static async getPhotos() {
        const req = await axios.get(URL);
        
        return req.data;
    }
}

module.exports = EndPoint;