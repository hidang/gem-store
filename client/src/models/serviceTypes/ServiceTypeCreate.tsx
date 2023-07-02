import * as React from 'react';
import { Create, TabbedForm, TextInput, required } from 'react-admin';

import { ServiceTypeEditDetails } from './ServiceTypeEditDetails';

const ServiceTypeCreate = () => (
    <Create>
        <TabbedForm defaultValues={{ sales: 0 }}>
                    <TabbedForm.Tab label="Thêm dịch vụ" sx={{ maxWidth: '40em' }}>
                <ServiceTypeEditDetails />
            </TabbedForm.Tab>
        </TabbedForm>
    </Create>
);

export default ServiceTypeCreate;
