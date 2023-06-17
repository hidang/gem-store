import * as React from 'react';
import { Create, TabbedForm, TextInput, required } from 'react-admin';

import { ProductTypeEditDetails } from './ProductTypeEditDetails';

const ProductTypeCreate = () => (
    <Create>
        <TabbedForm defaultValues={{ sales: 0 }}>
                    <TabbedForm.Tab label="Thêm loại sản phẩm" sx={{ maxWidth: '40em' }}>
                <ProductTypeEditDetails />
            </TabbedForm.Tab>
        </TabbedForm>
    </Create>
);

export default ProductTypeCreate;
