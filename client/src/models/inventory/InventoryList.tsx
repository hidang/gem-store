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
    ShowButton
} from 'react-admin';

const InventoryList = () => {
    const getResourceLabel = useGetResourceLabel();
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));
    return (
        <ListBase perPage={24} sort={{ field: 'reference', order: 'ASC' }}>
            <Title defaultTitle={getResourceLabel('Tồn kho', 1)} />

            <FilterContext.Provider value={InventoryFilters}>

                <ListActions isSmall={isSmall} />
                <Box m={0.5}>
                    <FilterForm />
                </Box>
            </FilterContext.Provider>

            <Datagrid>
                <TextField label="Id" source="id" />
                <TextField label="Đơn vị tính" source="name" />
                <TextField label="Số lượng" source="count" />


                <EditButton label='Chỉnh sửa' />

            </Datagrid>
        </ListBase>
    );
};

export const InventoryFilters = [
    <SearchInput source="q" alwaysOn />,

];

const ListActions = ({ isSmall }: any) => (
    <TopToolbar sx={{ minHeight: { sm: 56 } }}>
        {isSmall && <FilterButton />}

        
        <ExportButton label='Xuất báo cáo Tồn kho' />
    </TopToolbar>
);

export default InventoryList;
