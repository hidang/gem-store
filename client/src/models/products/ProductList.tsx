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
  CreateButton,
} from 'react-admin';

const ProductList = () => {
  const getResourceLabel = useGetResourceLabel();
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));
  return (
    <List perPage={24} sort={{ field: 'reference', order: 'ASC' }}>
      <ProductListTitle />
      <FilterContext.Provider value={ProductFilters}>
        <ListActions isSmall={isSmall} />
        <Box m={0.5}>
          <FilterForm />
        </Box>
      </FilterContext.Provider>
      <Datagrid>
        <TextField label="Id" source="id" />
        <TextField label="Tên sản phẩm" source="name" />
        <ReferenceField label="Loại sản phẩm" source="productType_id" reference="product_type">
          <TextField source="name" />
        </ReferenceField>
        <TextField label="Số lượng" source="count" />
        <TextField label="Đơn giá mua" source="pricePerProduct" />
        <ReferenceField label="Số phiếu mua hàng" source="purchaseInvoice_id" reference="purchase_invoice">
          <TextField source="id" />
        </ReferenceField>
        <ReferenceField label="Tên nhà cung cấp" source="purchaseInvoice_id" reference="purchase_invoice">
          <ReferenceField  source="supplier_id" reference="supplier">
            <TextField source="name" />
          </ReferenceField>
        </ReferenceField>
        <EditButton label='Chỉnh sửa' />
      </Datagrid>
    </List>
  );
};

const ProductListTitle = () => {
  const getResourceLabel = useGetResourceLabel();
  const resourceLabel = getResourceLabel('Sản phẩm', 1);
  return <Title defaultTitle={resourceLabel} />;
};

export const ProductFilters = [
  <SearchInput source="q" alwaysOn />,
];

const ListActions = ({ isSmall }: any) => (
  <TopToolbar sx={{ minHeight: { sm: 56 } }}>
    {isSmall && <FilterButton />}
    <CreateButton label='Thêm sản phẩm cho phiếu mua hàng'/>
    <ExportButton label='Xuất danh sách sản phẩm'/>
  </TopToolbar>
);

export default ProductList;
