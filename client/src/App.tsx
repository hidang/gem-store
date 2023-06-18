import * as React from 'react';
import { Admin, CustomRoutes, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import  {dataProvider}  from './mock/dataProvider';
import authProvider from './mock/authProvider';
import { Login, Layout } from './layout';
import { lightTheme, darkTheme } from './layout/themes';
import { fetchUtils } from 'ra-core';
import  simpleRestProvider  from 'ra-data-simple-rest';

import products from './models/products';
import suppliers from './models/suppliers';
import reciepts from './models/reciepts';
import productTypes from './models/productTypes';
import units from './models/units';
import clients from './models/clients';
dataProvider.getOne('unit',{id:"5cd5dcae-b81d-46f4-af13-42a798f8e476"}).then(data=>{
    console.log(data.data.name)
})
export const App = () => (
    <Admin
        title=""
        dataProvider={dataProvider}
        authProvider={authProvider}
        loginPage={Login}
        layout={Layout}
        disableTelemetry
        theme={lightTheme}
        darkTheme={darkTheme}
        defaultTheme="light">
        <Resource name="productTypes" {...productTypes} />
        <Resource name="unit" {...units} />
        <Resource name="products" {...products} />
        <Resource name="suppliers" {...suppliers} />
        <Resource name="reciepts" {...reciepts} />
        <Resource name="clients" {...clients} />

    </Admin>
);
function data(value: { data: any; }): { data: any; } | PromiseLike<{ data: any; }> {
    throw new Error('Function not implemented.');
}

