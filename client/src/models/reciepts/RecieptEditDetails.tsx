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

export const RecieptEditDetails = () => (
  <Grid container columnSpacing={2}>
    <Grid item xs={12} sm={8}>
      <TextInput label="Tên nhà cung cấp" source="Reciept name" fullWidth validate={req} />
    </Grid>

    <Grid item xs={12} sm={8}>
      <NumberInput label="Mã nhà cung cấp" source="Reciept code" validate={req} fullWidth min={0} />
    </Grid>
    <Grid item xs={12} sm={8}>
      <TextInput label="Địa chỉ nhà cung cấp" source="address" fullWidth validate={req} />
    </Grid>
    <Grid item xs={12} sm={8}>

      <TextInput label="Số điện thoại" source="Phone" type="number" parse={convertStringToNumber} validate={req} fullWidth />
    </Grid>

  </Grid>
);

const req = [required()];
