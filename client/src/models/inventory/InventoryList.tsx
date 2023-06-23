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
} from 'react-admin';

const InventoryList = () => {
  const getResourceLabel = useGetResourceLabel();
  return (
    <List perPage={24} sort={{ field: 'reference', order: 'ASC' }}>
      <InventoryListTitle />
      <FilterContext.Provider value={InventoryFilters}>
        <ListActions />
        <Box m={0.5}>
          <FilterForm />
        </Box>
      </FilterContext.Provider>
      <Datagrid>
        <TextField label="Id" source="id" />
        <TextField label="Sản phẩm" source="name" />
        <ReferenceField label="Đơn vị tính" source="productType_id" reference="product_type">
          <ReferenceField source="unit_id" reference="unit">
            <TextField source="name" />
          </ReferenceField>
        </ReferenceField>
        <TextField label="Số lượng mua vào" source="countBuy" />
        <TextField label="Số lượng bán ra" source="countSale" />
        <EditButton label='Chỉnh sửa' />
      </Datagrid>
    </List>
  );
};

const InventoryListTitle = () => {
  const getResourceLabel = useGetResourceLabel();
  const resourceLabel = getResourceLabel('Tồn kho', 1);
  return <Title defaultTitle={resourceLabel} />;
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
