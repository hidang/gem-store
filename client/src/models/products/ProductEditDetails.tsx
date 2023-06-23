import * as React from "react";
import {
  NumberInput,
  ReferenceInput,
  required,
  SelectInput,
  TextInput,
} from "react-admin";
import { InputAdornment, Grid } from "@mui/material";

const convertStringToNumber = (value: any) => {
  const float = parseFloat(value);
  return isNaN(float) ? null : "0" + float;
};

export const ProductEditDetails = () => (
  <Grid container columnSpacing={2}>
    <Grid item xs={12} sm={8}>
      <ReferenceInput source="purchaseInvoice_id" reference="purchase_invoice" >
        <SelectInput label="Mã hoá đơn" optionText="id" validate={req} fullWidth />
      </ReferenceInput>
    </Grid>
    <Grid item xs={12} sm={8}>
      <TextInput label="Tên sản phẩm" source="name" fullWidth validate={req} />
    </Grid>
    <Grid item xs={12} sm={8}>
      <ReferenceInput source="productType_id" reference="product_type">
        <SelectInput label="Loại sản phẩm" optionText="name" validate={req} fullWidth />
      </ReferenceInput>
    </Grid>
    {/* <Grid item xs={12} sm={8}>
      <ReferenceInput source="supplier_id" reference="supplier">
        <SelectInput label="Nhà cung cấp" optionText="name"  fullWidth />
        {/* <SelectInput parse={value => value === 'not defined' ? undefined : null} /> 
      </ReferenceInput>
    </Grid> */}

    <Grid item xs={12} sm={8}>

      <NumberInput label="Số lượng" source="count" validate={req} fullWidth min={1} />
    </Grid>
    <Grid item xs={12} sm={8}>

      <NumberInput label="Đơn giá mua" source="pricePerProduct" validate={req} fullWidth min={0} />
    </Grid>


  </Grid>
);

const req = [required()];
