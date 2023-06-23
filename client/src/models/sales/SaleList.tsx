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
import SaleShow from './SaleShow';

const SaleList = () => {
  const getResourceLabel = useGetResourceLabel();
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));
  return (
    <List perPage={24} sort={{ field: 'reference', order: 'ASC' }}>
      <SaleListTitle />
      <FilterContext.Provider value={SaleFilters}>
        <ListActions isSmall={isSmall} />
        <Box m={0.5}>
          <FilterForm />
        </Box>
      </FilterContext.Provider>
      <Datagrid rowClick="expand" expand={<SaleShow />}>
        <TextField label="Số phiếu" source="id" />
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
        <ReferenceField label="Khách hàng" source="customer_id" reference="customer">
          <TextField source="name" />
        </ReferenceField>
        <EditButton label='Chỉnh sửa' />
      </Datagrid>
    </List>
  );
};

const SaleListTitle = () => {
  const getResourceLabel = useGetResourceLabel();
  const resourceLabel = getResourceLabel('Hoá đơn mua hàng', 1);
  return <Title defaultTitle={resourceLabel} />;
};

export const SaleFilters = [
  <SearchInput source="q" alwaysOn />,
];

const ListActions = ({ isSmall }: any) => (
  <TopToolbar sx={{ minHeight: { sm: 56 } }}>
    {isSmall && <FilterButton />}
    <CreateButton label='Thêm đơn bán hàng' />
    <ExportButton label='Xuất danh sách hoá đơn bán hàng' />
  </TopToolbar>
);

export default SaleList;
