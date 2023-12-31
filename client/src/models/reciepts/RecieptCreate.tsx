import * as React from 'react';
import { Create, TabbedForm, TextInput, required } from 'react-admin';

import { RecieptEditDetails } from './RecieptEditDetails';

const RecieptCreate = () => (
    <Create>
        <TabbedForm defaultValues={{ sales: 0 }}>
            <TabbedForm.Tab label="Thêm hoá đơn mua hàng" sx={{ maxWidth: '40em' }}>
                <RecieptEditDetails />
            </TabbedForm.Tab>
        </TabbedForm>
    </Create>
);

export default RecieptCreate;
