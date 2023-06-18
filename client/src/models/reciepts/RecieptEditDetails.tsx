import * as React from "react";
import {
  DateInput,
  NumberInput,
  ReferenceInput,
  required,
  SelectInput,
  TextInput,
  ArrayInput,
  SimpleFormIterator
} from "react-admin";
import { InputAdornment, Grid } from "@mui/material";

const convertStringToNumber = (value: any) => {
  const float = parseFloat(value);
  return isNaN(float) ? null : "0" + float;
};

export const RecieptEditDetails = () => (
  <Grid container columnSpacing={2}>

    <Grid item xs={12} sm={4}>
      <ReferenceInput source="supplier_id" reference="suppliers">
        <SelectInput label="Tên nhà cung cấp" optionText="Supplier name" validate={req} fullWidth />
      </ReferenceInput>
    </Grid>

    <Grid item xs={12} sm={4}>
      <DateInput label="Ngày Nhập" source="Date" validate={req} fullWidth />
    </Grid>
    <Grid item  >
      <ArrayInput source="Product" validate={req}>
        <SimpleFormIterator inline getItemLabel={index => `#${index + 1}`}>
          <TextInput label="Tên sản phẩm" source="Product name" helperText={false} validate={req} />

          <ReferenceInput source="productType_id" reference="productTypes">
            <SelectInput label="Loại sản phẩm" optionText="Product type" validate={req} />
          </ReferenceInput>
          <NumberInput label="Số lượng" source="Quantity" helperText={false} validate={req} />

          <NumberInput label="Giá tiền" source="Price" helperText={false} InputProps={{
            startAdornment: (
              <InputAdornment position="start">$</InputAdornment>
            ),
          }} validate={req} />
          <NumberInput label="Thành tiền" source="Total Price" InputProps={{
            startAdornment: (
              <InputAdornment position="start">$</InputAdornment>
            ),
          }} helperText={false} validate={req} />

        </SimpleFormIterator>
      </ArrayInput>
    </Grid>
    <Grid item xs={12} sm={8}>


    </Grid>

  </Grid>
);

const req = [required()];
