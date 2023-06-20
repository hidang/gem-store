import * as React from 'react';
import { Box, Chip, useMediaQuery, Theme } from '@mui/material';


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
    ShowButton,
    NumberField
} from 'react-admin';

const ServiceTypeList = () => {
    const getResourceLabel = useGetResourceLabel();
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));
    return (
        <ListBase perPage={24} sort={{ field: 'reference', order: 'ASC' }}>
            <Title defaultTitle={getResourceLabel('Đơn vị', 1)} />

            <FilterContext.Provider value={ServiceTypeFilters}>

                <ListActions isSmall={isSmall} />
                <Box m={0.5}>
                    <FilterForm />
                </Box>
            </FilterContext.Provider>

            <Datagrid>
                <TextField label="Id" source="id" />
                <TextField label="Tên dịch vụ " source="name" />
                <NumberField label="Giá" source="price" />
                <EditButton label='Chỉnh sửa' />

            </Datagrid>
        </ListBase>
    );
};

export const ServiceTypeFilters = [
    <SearchInput source="q" alwaysOn />,

];

const ListActions = ({ isSmall }: any) => (
    <TopToolbar sx={{ minHeight: { sm: 56 } }}>
        {isSmall && <FilterButton />}

        <CreateButton label='Thêm dịch vụ' />
        <ExportButton label='Xuất danh sách dịch vụ' />
    </TopToolbar>
);

export default ServiceTypeList;
