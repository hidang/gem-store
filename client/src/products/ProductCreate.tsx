import * as React from 'react';
import { Create, TabbedForm, TextInput, required } from 'react-admin';

import { ProductEditDetails } from './ProductEditDetails';

const ProductCreate = () => (
    <Create>
        <TabbedForm defaultValues={{ sales: 0 }}>
            {/* <TabbedForm.Tab
        label="resources.products.tabs.image"
        sx={{ maxWidth: "40em" }}
      >
        <TextInput autoFocus source="image" fullWidth validate={required()} />
        <TextInput source="thumbnail" fullWidth validate={required()} />
      </TabbedForm.Tab> */}
            <TabbedForm.Tab label="resources.products.tabs.details" path="details" sx={{ maxWidth: '40em' }}>
                <ProductEditDetails />
            </TabbedForm.Tab>
        </TabbedForm>
    </Create>
);

export default ProductCreate;
