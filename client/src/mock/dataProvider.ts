import fakeRestDataProvider from 'ra-data-fakerest';
import data from '../mock/data.json';
import { Axios } from '../api/axios';

const testApiMockData: any = () => {
    Axios.get('/mock-api')
        .then((res: { data: string }) => {
            console.log('@@@@', res.data);
            JSON.parse(res.data);
        })
        .catch((err: any) => {
            console.log(err);
        });
};

export const dataProvider = fakeRestDataProvider(data, true);
//export const dataProvider = fakeRestDataProvider(testApiMockData(), true);
