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
// dataProvider.getOne('unit',{id:"b49c5caf-0a8f-4209-96e3-560d10bb10e3"}).then(data=>{
//     console.log(data.data)
// })
// dataProvider.getList('unit').then(data=>{
//     console.log(data)
// })
export const App = () => (
    <Admin
        title=""
        dataProvider={dataProvider}
        authProvider={authProvider}
        loginPage={Login}
        // layout={Layout}
        disableTelemetry
        theme={lightTheme}
        darkTheme={darkTheme}
        defaultTheme="light">
        <Resource  name="product_type" {...productTypes} />
        <Resource name="unit" {...units} />
        <Resource name="product" {...products} />
        <Resource name="supplier" {...suppliers} />
        <Resource name="purchase_invoice" {...reciepts} />
        <Resource name="customer" {...clients} />

    </Admin>
);


