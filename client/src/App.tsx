import * as React from 'react';
import { Admin, CustomRoutes, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './data/dataProvider';
import authProvider from './authProvider';
import { Login, Layout } from './layout';
import { lightTheme, darkTheme } from './layout/themes';

import products from './products';

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
        {/* <Resource name="supplier" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="inventory" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="service" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="service_bill" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="reciept" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="bill_of_sale" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="client" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="staff" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} /> */}
    </Admin>
);
