import * as React from 'react';
import { Admin, CustomRoutes, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './mock/dataProvider';
import authProvider from './mock/authProvider';
import { Login, Layout } from './layout';
import { lightTheme, darkTheme } from './layout/themes';

import products from './models/products';
import suppliers from './models/suppliers';
import reciepts from './models/reciepts';
import productTypes from './models/productTypes';
import units from './models/units';

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
        <Resource name="units" {...units} />
        <Resource name="products" {...products} />
        <Resource name="suppliers" {...suppliers} />
        <Resource name="reciepts" {...reciepts} />
        
    </Admin>
);
