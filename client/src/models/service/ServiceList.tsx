import * as React from 'react';
import { Box, Chip, useMediaQuery, Theme } from '@mui/material';

import ServiceShow from './ServiceShow';

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
    NumberField,
    BooleanField,
    FunctionField
} from 'react-admin';

const ServiceListList = () => {
    const getResourceLabel = useGetResourceLabel();
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));
    return (
        <ListBase perPage={24} sort={{ field: 'reference', order: 'ASC' }}>
            <Title defaultTitle={getResourceLabel('Đơn vị', 1)} />

            <FilterContext.Provider value={ServiceListFilters}>

                <Box m={0.5}>
                    <FilterForm />
                </Box>
            </FilterContext.Provider>

            <Datagrid rowClick="expand" expand={<ServiceShow/>}>
               <FunctionField
                    label="Ngày lập"
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
            </Datagrid>
        </ListBase>
    );
};

export const ServiceListFilters = [
    <SearchInput source="q" alwaysOn />,

];


export default ServiceListList;
