import React from 'react';
import { Box } from '@mui/material';

import {
  CreateButton,
  ExportButton,
  FilterButton,
  FilterForm,
  FilterContext,
  SearchInput,
  TopToolbar,
  Title,
  List,
  Datagrid,
  TextField,
  EditButton,
  useGetResourceLabel,
  ReferenceInput,
  TextInput,
} from 'react-admin';


const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];

const UnitList = () => {
  return (
    <List perPage={10} sort={{ field: 'id', order: 'DESC' }}title={'Đơn vị tính'}>
   
      <FilterContext.Provider value={UnitFilters}>
        <ListActions />
        <Box m={0.5}>
          <FilterForm />
        </Box>
      </FilterContext.Provider>
      <Datagrid>
        <TextField label="Id" source="id" />
        <TextField label="Đơn vị tính" source="name" />
        <EditButton label='Chỉnh sửa' />
      </Datagrid>
    </List>
  );
};

const UnitListTitle = () => {
  const getResourceLabel = useGetResourceLabel();
  const resourceLabel = getResourceLabel('Đơn vị', 1);
  return <Title defaultTitle={resourceLabel} />;
};

export const UnitFilters = [
  <SearchInput source="q" alwaysOn />,
];

const ListActions = () => (
  <TopToolbar sx={{ minHeight: { sm: 56 } }}>
    <FilterButton />
    <CreateButton label='Thêm đơn vị tính' />
    <ExportButton label='Xuất danh sách đơn vị tính' />
  </TopToolbar>
);

export default UnitList;
