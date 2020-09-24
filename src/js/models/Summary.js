import axios from 'axios';

export default class Summary {
    constructor() {
    }
    async getSummary() {
        try {
            const summ = await axios(`https://nepalcorona.info/api/v1/data/nepal`);
            this.result = summ.data;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}