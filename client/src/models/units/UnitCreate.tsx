import * as React from 'react';
import { Create, TabbedForm, TextInput, required } from 'react-admin';

import { UnitEditDetails } from './UnitEditDetails';

const UnitCreate = () => (
    <Create>
        <TabbedForm defaultValues={{ sales: 0 }}>
                    <TabbedForm.Tab label="Thêm đơn vị tính" sx={{ maxWidth: '40em' }}>
                <UnitEditDetails />
            </TabbedForm.Tab>
        </TabbedForm>
    </Create>
);

export default UnitCreate;
