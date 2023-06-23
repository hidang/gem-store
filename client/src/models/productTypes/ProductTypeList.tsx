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
  ReferenceField,
  EditButton,
  useGetResourceLabel,
  Datagrid,
  SearchInput,
} from 'react-admin';

const ProductTypeList = () => {
  const getResourceLabel = useGetResourceLabel();
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));
  return (
    <List perPage={24} sort={{ field: 'id', order: 'ASC' }} title={'Loại sản phẩm'}>
     
      <FilterContext.Provider value={ProductTypeFilters}>
        <ListActions isSmall={isSmall} />
        <Box m={0.5}>
          <FilterForm />
        </Box>
      </FilterContext.Provider>
      <Datagrid>
        <TextField label="Id" source="id" />
        <TextField label="Loại Sản phẩm" source="name" />
        <TextField label="Phần trăm lợi nhuận" source="profitPercent" sx={{ fontWeight: 'bold' }}/>
        <ReferenceField source="unit_id" reference="unit">
          <TextField source="name" />
        </ReferenceField>
        <EditButton label='Chỉnh sửa' />
      </Datagrid>
    </List>
  );
};

const ProductTypeListTitle = () => {
  const getResourceLabel = useGetResourceLabel();
  const resourceLabel = getResourceLabel('Loại sản phẩm', 1);
  return <Title defaultTitle={resourceLabel} />;
};

export const ProductTypeFilters = [
  <SearchInput source="q" alwaysOn />,
];

const ListActions = ({ isSmall }: any) => (
  <TopToolbar sx={{ minHeight: { sm: 56 } }}>
    {isSmall && <FilterButton />}
    <CreateButton label='Thêm loại sản phẩm'/>
    <ExportButton label='Xuất danh sách loại sản phẩm'/>
  </TopToolbar>
);

export default ProductTypeList;
