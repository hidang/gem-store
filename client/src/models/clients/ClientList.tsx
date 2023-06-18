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

const ClientList = () => {
    const getResourceLabel = useGetResourceLabel();
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));
    return (
        <ListBase perPage={24} sort={{ field: 'reference', order: 'ASC' }}>
            <Title defaultTitle={getResourceLabel('Clients', 2)} />

            <FilterContext.Provider value={ClientFilters}>

                <ListActions isSmall={isSmall} />
                <Box m={0.5}>
                    <FilterForm />
                </Box>
            </FilterContext.Provider>

            <Datagrid>
                <TextField label="Id" source="id" />
                <TextField label="Mã khách hàng" source="Client code" />
                <TextField label="Tên khách hàng" source="Name" />
                <TextField label="Giới tính" source="Sex" />
                <TextField label="Số điện thoại" source="Phone" />
                <TextField label="Ngày sinh" source="Date of Birth" />
                <TextField label="Địa chỉ" source="address" />
                
                

                <EditButton label='Chỉnh sửa' />
            </Datagrid>
        </ListBase>
    );
};

export const ClientFilters = [
    <SearchInput  source="q" alwaysOn />,
   
];

const ListActions = ({ isSmall }: any) => (
    <TopToolbar sx={{ minHeight: { sm: 56 } }}>
        {isSmall && <FilterButton />}
        
        <CreateButton label='Thêm khách hàng'/>
        <ExportButton label='Xuất danh sách khách hàng'/>
    </TopToolbar>
);

export default ClientList;
