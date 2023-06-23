import React from 'react';
import { Box, useMediaQuery, Theme } from '@mui/material';
import {
  CreateButton,
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
  FunctionField,
} from 'react-admin';

const ClientList = () => {
  const getResourceLabel = useGetResourceLabel();
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));
  return (
    <List perPage={24} sort={{ field: 'reference', order: 'ASC' }} title={'Thông tin khách hàng'}>
      
      <FilterContext.Provider value={ClientFilters}>
        <ListActions isSmall={isSmall} />
        <Box m={0.5}>
          <FilterForm />
        </Box>
      </FilterContext.Provider>
      <Datagrid>
        <TextField label="Id" source="id" />
        <TextField label="Tên khách hàng" source="name" />
        <TextField label="Số điện thoại" source="phone" />
        <FunctionField
          label="Ngày sinh"
          render={(record: { dob: string }) => {
            const createdAt = new Date(record.dob);
            const year = createdAt.getFullYear();
            const month = String(createdAt.getMonth() + 1).padStart(2, '0');
            const day = String(createdAt.getDate()).padStart(2, '0');
            return `${day}-${month}-${year}`;
          }}
        />
        <TextField label="Địa chỉ" source="address" />
        <EditButton label='Chỉnh sửa' />
      </Datagrid>
    </List>
  );
};

const ClientListTitle = () => {
  const getResourceLabel = useGetResourceLabel();
  const resourceLabel = getResourceLabel('Thông tin Khách hàng', 1);
  return <Title defaultTitle={resourceLabel} />;
};

export const ClientFilters = [
  <SearchInput source="q" alwaysOn />,
];

const ListActions = ({ isSmall }: any) => (
  <TopToolbar sx={{ minHeight: { sm: 56 } }}>
    {isSmall && <FilterButton />}
    <CreateButton label='Thêm khách hàng' />
    <ExportButton label='Xuất danh sách khách hàng' />
  </TopToolbar>
);

export default ClientList;
