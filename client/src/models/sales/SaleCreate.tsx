import * as React from 'react';
import { Create, TabbedForm, TextInput, required } from 'react-admin';

import { SaleEditDetails } from './SaleEditDetails';

const SaleCreate = () => (
    <Create>
        <TabbedForm defaultValues={{ sales: 0 }}>
            <TabbedForm.Tab label="Thêm hoá đơn mua hàng" sx={{ maxWidth: '40em' }}>
                <SaleEditDetails />
            </TabbedForm.Tab>
        </TabbedForm>
    </Create>
);

export default SaleCreate;
