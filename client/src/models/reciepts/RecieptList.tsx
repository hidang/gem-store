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

const RecieptList = () => {
    const getResourceLabel = useGetResourceLabel();
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));
    return (
        <ListBase perPage={24} sort={{ field: 'reference', order: 'ASC' }}>
            <Title defaultTitle={getResourceLabel('Reciepts', 2)} />

            <FilterContext.Provider value={RecieptFilters}>

                <ListActions isSmall={isSmall} />
                <Box m={0.5}>
                    <FilterForm />
                </Box>
            </FilterContext.Provider>

            <Datagrid>
                <TextField label="Id" source="id" />
                <TextField label="Tên nhà cung cấp" source="Reciept name" />
                <TextField label="Mã cung cấp" source="Reciept code" />
                <TextField label="Địa chỉ nhà cung cấp" source="address" />
                <TextField label="Số điện thoại" source="Phone" />

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

        <CreateButton label='Thêm nhà cung cấp' />
        <ExportButton label='Xuất danh sách nhà cung cấp' />
    </TopToolbar>
);

export default RecieptList;
