import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from '../../mock/dataProvider';

function HomePage() {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="product" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
            <Resource name="supplier" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
            <Resource name="inventory" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
            <Resource name="service" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
            <Resource name="service_bill" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
            <Resource name="reciept" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
            <Resource name="bill_of_sale" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
            <Resource name="client" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
            <Resource name="staff" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        </Admin>
    );
}

export default HomePage;
