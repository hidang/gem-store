import * as React from 'react';
import { Create, TabbedForm, TextInput, required } from 'react-admin';

import { SupplierEditDetails } from './SupplierEditDetails';

const SupplierCreate = () => (
    <Create>
        <TabbedForm defaultValues={{ sales: 0 }}>
                    <TabbedForm.Tab label="Thêm nhà cung cấp" sx={{ maxWidth: '40em' }}>
                <SupplierEditDetails />
            </TabbedForm.Tab>
        </TabbedForm>
    </Create>
);

export default SupplierCreate;
