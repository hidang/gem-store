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
import SaleShow from './SaleShow';

const SaleList = () => {
    const getResourceLabel = useGetResourceLabel();
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));
    return (
        <ListBase perPage={24} sort={{ field: 'reference', order: 'ASC' }}>
            <Title defaultTitle={getResourceLabel('Sales', 2)} />

            <FilterContext.Provider value={SaleFilters}>

                <ListActions isSmall={isSmall} />
                <Box m={0.5}>
                    <FilterForm />
                </Box>
            </FilterContext.Provider>

            <Datagrid rowClick="expand" expand={<SaleShow />}>
                <TextField label="Số phiếu" source="id" />

                
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
                <ReferenceField label="Khách hàng" source="customer_id" reference="customer">
                    <TextField source="name" />
                </ReferenceField>

                <EditButton label='Chỉnh sửa' />

            </Datagrid>
        </ListBase>
    );
};

export const SaleFilters = [
    <SearchInput source="q" alwaysOn />,

];

const ListActions = ({ isSmall }: any) => (
    <TopToolbar sx={{ minHeight: { sm: 56 } }}>
        {isSmall && <FilterButton />}

        <CreateButton label='Thêm đơn bán hàng' />
        <ExportButton label='Xuất danh sách hoá đơn bán hàng' />
    </TopToolbar>
);

export default SaleList;
