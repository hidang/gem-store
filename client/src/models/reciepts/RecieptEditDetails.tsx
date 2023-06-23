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
    </Grid>

  </Grid>
);

const req = [required()];
