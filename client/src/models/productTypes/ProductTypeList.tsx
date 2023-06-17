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

const ProductTypeList = () => {
    const getResourceLabel = useGetResourceLabel();
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));
    return (
        <ListBase perPage={24} sort={{ field: 'reference', order: 'ASC' }}>
            <Title defaultTitle={getResourceLabel('ProductTypes', 2)} />

            <FilterContext.Provider value={ProductTypeFilters}>

                <ListActions isSmall={isSmall} />
                <Box m={0.5}>
                    <FilterForm />
                </Box>
            </FilterContext.Provider>

            <Datagrid>
                <TextField label="Id" source="id" />
                <TextField label="Loại Sản phẩm" source="Product type" />
                <TextField label="Mã loại Sản phẩm" source="Product type code" />
                <TextField label="Đơn vị tính" source="Unit" />
                <TextField label="Phần trăm lợi nhuận" source="profit percentage" />

                <EditButton label='Chỉnh sửa' />
            </Datagrid>
        </ListBase>
    );
};

export const ProductTypeFilters = [
    <SearchInput  source="q" alwaysOn />,
   
];

const ListActions = ({ isSmall }: any) => (
    <TopToolbar sx={{ minHeight: { sm: 56 } }}>
        {isSmall && <FilterButton />}
        
        <CreateButton label='Thêm loại sản phẩm'/>
        <ExportButton label='Xuất danh sách loại sản phẩm'/>
    </TopToolbar>
);

export default ProductTypeList;
