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
  return isNaN(float) ? null : float + " %";
};

export const ProductTypeEditDetails = () => (
  <Grid container columnSpacing={2}>
    <Grid item xs={12} sm={8}>
      <TextInput label="Tên loại sản phẩm" source="Product type" fullWidth validate={req} />
    </Grid>

    <Grid item xs={12} sm={8}>

      <ReferenceInput source="Unit_id" reference="units">
        <SelectInput label="Đơn vị tính" optionText="Unit" validate={req} fullWidth />
      </ReferenceInput>
    </Grid>
    <Grid item xs={12} sm={8}>

      <NumberInput label="Phần trăm lợi nhuận" source="profit percentage" InputProps={{
        startAdornment: (
          <InputAdornment position="start">%</InputAdornment>
        ),
      }} validate={req} fullWidth min={0} />
    </Grid>

  </Grid>
);

const req = [required()];
