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
    NumberField,
    BooleanField,
    FunctionField,
} from 'react-admin';

const ServiceListList = () => {
    const getResourceLabel = useGetResourceLabel();
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));
    return (
        <ListBase perPage={24} sort={{ field: 'reference', order: 'ASC' }}>
            <Title defaultTitle={getResourceLabel('Đơn vị', 1)} />

            <FilterContext.Provider value={ServiceListFilters}>

                <ListActions isSmall={isSmall} />
                <Box m={0.5}>
                    <FilterForm />
                </Box>
            </FilterContext.Provider>

            <Datagrid >
                <TextField label="Id" source="id" />
                <TextField label="Loại dịch vụ " source="name" />
                <NumberField label="Tiền phát sinh" source='extraPrice'/>
                <NumberField label="Số lượng" source="count" />
                <NumberField label="Thanh toán trả trước" source='prepay'/>
                <FunctionField
                    label="Ngày giao"
                    render={(record: { deliveryDate: string }) => {
                        const createdAt = new Date(record.deliveryDate);
                        const year = createdAt.getFullYear();
                        const month = String(createdAt.getMonth() + 1).padStart(2, '0');
                        const day = String(createdAt.getDate()).padStart(2, '0');
                        return `${day}-${month}-${year}`;
                    }}
                />
                <ReferenceField source="serviceType_id" reference="service_type">
                    <NumberField label="Tổng tiền" source="price" />
                </ReferenceField>
                <EditButton label='Chỉnh sửa' />

            </Datagrid>
        </ListBase>
    );
};

export const ServiceListFilters = [
    <SearchInput source="q" alwaysOn />,

];

const ListActions = ({ isSmall }: any) => (
    <TopToolbar sx={{ minHeight: { sm: 56 } }}>
        {isSmall && <FilterButton />}

        <CreateButton label='Thêm dịch vụ' />
        <ExportButton label='Xuất danh sách dịch vụ' />
    </TopToolbar>
);

export default ServiceListList;
