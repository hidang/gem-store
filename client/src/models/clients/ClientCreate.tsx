import * as React from 'react';
import { Create, TabbedForm, TextInput, required } from 'react-admin';

import { ClientEditDetails } from './ClientEditDetails';

const ClientCreate = () => (
    <Create>
        <TabbedForm defaultValues={{ sales: 0 }}>
                    <TabbedForm.Tab label="Thêm khách hàng" sx={{ maxWidth: '40em' }}>
                <ClientEditDetails />
            </TabbedForm.Tab>
        </TabbedForm>
    </Create>
);

export default ClientCreate;
