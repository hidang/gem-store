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
  return isNaN(float) ? null : "0"+float;
};

export const ProductTypeEditDetails = () => (
  <Grid container columnSpacing={2}>
    <Grid item xs={12} sm={8}>
      <TextInput label="Tên loại sản phẩm" source="Product type" fullWidth validate={req} />
    </Grid>
   
    <Grid item xs={12} sm={8}>
      <NumberInput label="Mã loại sản phẩm" source="Product type code" validate={req} fullWidth min={0} />
    </Grid>
    <Grid item xs={12} sm={8}>
      <TextInput label="Đơn vị tính" source="Unit" fullWidth validate={req} />
    </Grid>
    <Grid item xs={12} sm={8}>
      
      <NumberInput label="Phần trăm lợi nhuận" source="profit percentage" type="number"  validate={req} fullWidth/>
    </Grid>
    
  </Grid>
);

const req = [required()];
