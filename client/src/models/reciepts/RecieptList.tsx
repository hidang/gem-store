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
import RecieptShow from './RecieptShow';

const RecieptList = () => {
    const getResourceLabel = useGetResourceLabel();
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));
    return (
        <ListBase perPage={24} sort={{ field: 'reference', order: 'ASC' }}>
            <Title defaultTitle={getResourceLabel('Hoá đơn bán hàng', 1)} />

            <FilterContext.Provider value={RecieptFilters}>

                <ListActions isSmall={isSmall} />
                <Box m={0.5}>
                    <FilterForm />
                </Box>
            </FilterContext.Provider>

            <Datagrid rowClick="expand" expand={<RecieptShow />}>
                <TextField label="Id" source="id" />

                <FunctionField
                    label="Ngày tạo"
                    render={(record: { createdAt: string }) => {
                        const createdAt = new Date(record.createdAt);
                        const year = createdAt.getFullYear();
                        const month = String(createdAt.getMonth() + 1).padStart(2, '0');
                        const day = String(createdAt.getDate()).padStart(2, '0');
                        return `${day}-${month}-${year}`;
                    }}
                />
                <ReferenceField label="Nhà cung cấp" source="supplier_id" reference="supplier">
                    <TextField source="name" />
                </ReferenceField>
                <TextField label="Số lượng nhập" source="Products.lenght" />
                
                <EditButton label='Chỉnh sửa' />

            </Datagrid>
        </ListBase>
    );
};

export const RecieptFilters = [
    <SearchInput source="q" alwaysOn />,

];

const ListActions = ({ isSmall }: any) => (
    <TopToolbar sx={{ minHeight: { sm: 56 } }}>
        {isSmall && <FilterButton />}

        <CreateButton label='Thêm đơn mua hàng' />
        <ExportButton label='Xuất danh sách hoá đơn mua hàng' />
    </TopToolbar>
);

export default RecieptList;
