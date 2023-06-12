import fakeRestDataProvider from 'ra-data-fakerest';
import { Axios } from '../api/axios';

const testApiMockData: any = () => {
    Axios.get('/mock-api')
        .then((res) => {
            console.log('@@@@', res.data);
            JSON.parse(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
};
export const dataProvider = fakeRestDataProvider(testApiMockData(), true);
