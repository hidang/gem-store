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
  ReferenceField,
  FunctionField,
  CreateButton
} from 'react-admin';
import RecieptShow from './RecieptShow';

const RecieptList = () => {
  const getResourceLabel = useGetResourceLabel();
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));
  return (
    <List perPage={24} sort={{ field: 'id', order: 'ASC' }} title={'Hoá đơn mua hàng'}>
      
      <FilterContext.Provider value={RecieptFilters}>
        <ListActions isSmall={isSmall} />
        <Box m={0.5}>
          <FilterForm />
        </Box>
      </FilterContext.Provider>
      <Datagrid rowClick="expand" expand={<RecieptShow />}>
        <TextField label="Id" source="id" />
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
        <ReferenceField label="Nhà cung cấp" source="supplier_id" reference="supplier">
          <TextField source="name" />
        </ReferenceField>
        <EditButton label='Chỉnh sửa' />
      </Datagrid>
    </List>
  );
};

const RecieptListTitle = () => {
  const getResourceLabel = useGetResourceLabel();
  const resourceLabel = getResourceLabel('Hoá đơn bán hàng', 1);
  return <Title defaultTitle={resourceLabel} />;
};

export const RecieptFilters = [
  <SearchInput source="q" alwaysOn />,
];

const ListActions = ({ isSmall }: any) => (
  <TopToolbar sx={{ minHeight: { sm: 56 } }}>
    {<FilterButton />}
    <CreateButton label='Thêm đơn mua hàng' />
    <ExportButton label='Xuất danh sách hoá đơn mua hàng' />
  </TopToolbar>
);

export default RecieptList;
