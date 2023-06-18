import * as React from 'react';
import { Create, TabbedForm, TextInput, required } from 'react-admin';

import { ProductEditDetails } from './ProductEditDetails';

const ProductCreate = () => (
    <Create>
        <TabbedForm defaultValues={{ sales: 0 }}>
            <TabbedForm.Tab label="resources.products.tabs.details" sx={{ maxWidth: '40em' }}>
                <ProductEditDetails />
            </TabbedForm.Tab>
        </TabbedForm>
    </Create>
);

export default ProductCreate;
