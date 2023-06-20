import * as React from 'react';
import { Create, TabbedForm, TextInput, required } from 'react-admin';

import { InventoryEditDetails } from './InventoryEditDetails';

const InventoryCreate = () => (
    <Create>
        <TabbedForm defaultValues={{ sales: 0 }}>
                    <TabbedForm.Tab label="Thêm đơn vị tính" sx={{ maxWidth: '40em' }}>
                <InventoryEditDetails />
            </TabbedForm.Tab>
        </TabbedForm>
    </Create>
);

export default InventoryCreate;
