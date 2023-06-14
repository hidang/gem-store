import * as React from 'react';
import { Admin, CustomRoutes, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './mock/dataProvider';
import authProvider from './mock/authProvider';
import { Login, Layout } from './layout';
import { lightTheme, darkTheme } from './layout/themes';

import products from './models/products';
import suppliers from './models/suppliers';

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
        <Resource name="products" {...products} />
        <Resource name="suppliers" {...suppliers} />
        
    </Admin>
);
