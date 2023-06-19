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
      <ReferenceInput source="supplier_id" reference="supplier">
        <SelectInput label="Tên nhà cung cấp" optionText="name" validate={req} fullWidth />
      </ReferenceInput>
    </Grid>

    <Grid item xs={12} sm={4}>
      <DateInput label="Ngày Nhập" source="createdAt" validate={req} fullWidth />
    {/* </Grid>
    <Grid item  >
      <ArrayInput source="Product" validate={req}>
        <SimpleFormIterator inline getItemLabel={index => `#${index + 1}`}>
          <TextInput label="Tên sản phẩm" source="name" helperText={false} validate={req} />

          <ReferenceInput source="productType_id" reference="product_type">
            <SelectInput label="Loại sản phẩm" optionText="name" validate={req} />
          </ReferenceInput>
          <NumberInput label="Số lượng" source="count" helperText={false} validate={req} />

          <NumberInput label="Giá tiền" source="pricePerProduct" helperText={false} InputProps={{
            startAdornment: (
              <InputAdornment position="start">$</InputAdornment>
            ),
          }} validate={req} />
          
        </SimpleFormIterator>
      </ArrayInput>
    </Grid>
    <Grid item xs={12} sm={8}> */}


    </Grid>

  </Grid>
);

const req = [required()];
