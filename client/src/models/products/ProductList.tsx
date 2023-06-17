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
    EditButton
} from 'react-admin';

const ProductList = () => {
    const getResourceLabel = useGetResourceLabel();
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));
    return (
        <ListBase perPage={24} sort={{ field: 'reference', order: 'ASC' }}>
            <Title defaultTitle={getResourceLabel('products', 2)} />

            <FilterContext.Provider value={productFilters}>
            
                 <ListActions isSmall={isSmall} />
                    <Box m={0.5}>
                    <FilterForm />
                     </Box>
            </FilterContext.Provider>

            <Datagrid>
                <TextField source="id" />
                <TextField source="Product name" />
                <TextField source="Product type" />
                <TextField source="Product code" />
                <TextField source="Supplier code" />
                <TextField source="Unit" />
                <TextField source="Quantity" />
                <TextField source="Price" />
                
            </Datagrid>
        </ListBase>
    );
};

const QuickFilter = ({ label }: InputProps) => {
    const translate = useTranslate();
    return <Chip sx={{ mb: 1 }} label={translate(label as string)} />;
};

export const productFilters = [
    <SearchInput source="q" alwaysOn />,
    <ReferenceInput source="category_id" reference="categories" sort={{ field: 'id', order: 'ASC' }}>
        <SelectInput source="name" />
    </ReferenceInput>,

   
];

const ListActions = ({ isSmall }: any) => (
    <TopToolbar sx={{ minHeight: { sm: 56 } }}>
        {isSmall && <FilterButton />}
        
       
        <ExportButton />
    </TopToolbar>
);

export default ProductList;
