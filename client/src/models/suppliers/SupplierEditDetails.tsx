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

export const SupplierEditDetails = () => (
  <Grid container columnSpacing={2}>
    <Grid item xs={12} sm={8}>
      <TextInput label="Tên nhà cung cấp" source="name" fullWidth validate={req} />
    </Grid>

    <Grid item xs={12} sm={8}>
      <TextInput label="Địa chỉ nhà cung cấp" source="address" fullWidth validate={req} />
    </Grid>
    <Grid item xs={12} sm={8}>

      <TextInput label="Số điện thoại" source="phone" type="number" parse={convertStringToNumber} validate={req} fullWidth />
    </Grid>

  </Grid>
);

const req = [required()];
