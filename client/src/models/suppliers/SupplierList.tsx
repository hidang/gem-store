import React from 'react';
import { Box, useMediaQuery, Theme } from '@mui/material';
import {
  ExportButton,
  FilterButton,
  FilterForm,
  FilterContext,
  List,
  Title,
  TopToolbar,
  TextField,
  EditButton,
  useGetResourceLabel,
  Datagrid,
  SearchInput,
  CreateButton
} from 'react-admin';

const SupplierList = () => {
  const getResourceLabel = useGetResourceLabel();
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));

  return (
    <List perPage={24} sort={{ field: 'reference', order: 'ASC' }}>
      <SupplierListTitle />
      <FilterContext.Provider value={SupplierFilters}>
        <ListActions isSmall={isSmall} />
        <Box m={0.5}>
          <FilterForm />
        </Box>
      </FilterContext.Provider>
      <Datagrid>
        <TextField label="Id" source="id" />
        <TextField label="Tên nhà cung cấp" source="name" />
        <TextField label="Địa chỉ nhà cung cấp" source="address" />
        <TextField label="Số điện thoại" source="phone" />
        <EditButton label='Chỉnh sửa' />
      </Datagrid>
    </List>
  );
};

const SupplierListTitle = () => {
  const getResourceLabel = useGetResourceLabel();
  const resourceLabel = getResourceLabel('Nhà cung cấp', 1);
  return <Title defaultTitle={resourceLabel} />;
};

export const SupplierFilters = [
  <SearchInput source="q" alwaysOn />,
];

const ListActions = ({ isSmall }: any) => (
  <TopToolbar sx={{ minHeight: { sm: 56 } }}>
    {isSmall && <FilterButton />}
    <CreateButton label='Thêm nhà cung cấp' />
    <ExportButton label='Xuất danh sách nhà cung cấp' />
  </TopToolbar>
);

export default SupplierList;
