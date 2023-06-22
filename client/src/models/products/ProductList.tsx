import * as React from 'react';
import { Box, Chip, useMediaQuery, Theme } from '@mui/material';

import { dataProvider } from '../../mock/dataProvider';
import {
    CreateButton,
    ExportButton,
    FilterButton,
    FilterForm,
    FilterContext,
    InputProps,
    ListBase,
    NumberInput,
    Pagination,
    ReferenceInput,
    SearchInput,
    SelectInput,
    SortButton,
    Title,
    TopToolbar,
    useTranslate,
    useGetResourceLabel,
    Resource,
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    FunctionField
} from 'react-admin';

const ProductList = () => {
    const getResourceLabel = useGetResourceLabel();
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));
    return (
        <ListBase perPage={24} sort={{ field: 'reference', order: 'ASC' }}>
            <Title defaultTitle={getResourceLabel('Sản phẩm', 1)} />

            <FilterContext.Provider value={ProductFilters}>

                <ListActions isSmall={isSmall} />
                <Box m={0.5}>
                    <FilterForm />
                </Box>
            </FilterContext.Provider>

            <Datagrid>
                <TextField label="Id" source="id" />
               
                <TextField label="Tên sản phẩm" source="name" />
                <ReferenceField label="Loại sản phẩm" source="productType_id" reference="product_type">
                    <TextField source="name" />
                </ReferenceField>
                <TextField label="Số lượng" source="count" />
                <TextField label="Đơn giá mua" source="pricePerProduct" />

                
                <ReferenceField label="Số phiếu mua hàng" source="purchaseInvoice_id" reference="purchase_invoice">
                    <TextField source="id" />
                </ReferenceField>
                <ReferenceField label="Tên nhà cung cấp" source="purchaseInvoice_id" reference="purchase_invoice">
                <ReferenceField  source="supplier_id" reference="supplier">
                    <TextField source="name" />
                </ReferenceField>
                </ReferenceField>
                
                <EditButton label='Chỉnh sửa' />
            </Datagrid>
        </ListBase>
    );
};

export const ProductFilters = [
    <SearchInput  source="q" alwaysOn />,
   
];

const ListActions = ({ isSmall }: any) => (
    <TopToolbar sx={{ minHeight: { sm: 56 } }}>
        {isSmall && <FilterButton />}
        
        <CreateButton label='Thêm sản phẩm cho phiếu mua hàng'/>
        <ExportButton label='Xuất danh sách sản phẩm'/>
    </TopToolbar>
);

export default ProductList;
