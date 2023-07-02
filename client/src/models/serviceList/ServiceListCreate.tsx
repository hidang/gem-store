import * as React from 'react';
import { Create, TabbedForm, TextInput, required } from 'react-admin';

import { ServiceListEditDetails } from './ServiceListEditDetails';

const ServiceListCreate = () => (
    <Create>
        <TabbedForm defaultValues={{ sales: 0 }}>
                    <TabbedForm.Tab label="Thêm dịch vụ" sx={{ maxWidth: '40em' }}>
                <ServiceListEditDetails />
            </TabbedForm.Tab>
        </TabbedForm>
    </Create>
);

export default ServiceListCreate;
