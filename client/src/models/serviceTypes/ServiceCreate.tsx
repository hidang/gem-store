import * as React from 'react';
import { Create, TabbedForm, TextInput, required } from 'react-admin';

import { ServiceEditDetails } from './ServiceEditDetails';

const ServiceCreate = () => (
    <Create>
        <TabbedForm defaultValues={{ sales: 0 }}>
            <TabbedForm.Tab label="Thêm dịch vụ" sx={{ maxWidth: '40em' }}>
                <ServiceEditDetails />
            </TabbedForm.Tab>
        </TabbedForm>
    </Create>
);

export default ServiceCreate;
