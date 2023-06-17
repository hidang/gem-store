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

const UnitList = () => {
    const getResourceLabel = useGetResourceLabel();
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));
    return (
        <ListBase perPage={24} sort={{ field: 'reference', order: 'ASC' }}>
            <Title defaultTitle={getResourceLabel('Units', 2)} />

            <FilterContext.Provider value={UnitFilters}>

                <ListActions isSmall={isSmall} />
                <Box m={0.5}>
                    <FilterForm />
                </Box>
            </FilterContext.Provider>

            <Datagrid>
                <TextField label="Id" source="id" />
                <TextField label="Đơn vị tính" source="Unit" />
                <TextField label="Mã đơn vị tính" source="Unit code" />
                

                <EditButton label='Chỉnh sửa' />
            </Datagrid>
        </ListBase>
    );
};

export const UnitFilters = [
    <SearchInput  source="q" alwaysOn />,
   
];

const ListActions = ({ isSmall }: any) => (
    <TopToolbar sx={{ minHeight: { sm: 56 } }}>
        {isSmall && <FilterButton />}
        
        <CreateButton label='Thêm loại sản phẩm'/>
        <ExportButton label='Xuất danh sách loại sản phẩm'/>
    </TopToolbar>
);

export default UnitList;
