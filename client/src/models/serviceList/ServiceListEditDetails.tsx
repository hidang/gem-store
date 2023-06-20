import * as React from "react";
import {
  NumberField,
  NumberInput,
  ReferenceField,
  ReferenceInput,
  required,
  SelectInput,
  TextField,
  TextInput,
} from "react-admin";
import { InputAdornment, Grid } from "@mui/material";

const convertStringToNumber = (value: any) => {
  const float = parseFloat(value);
  return isNaN(float) ? null : "0" + float;
};

export const ServiceListEditDetails = () => (
  <Grid container columnSpacing={2}>
    <Grid item xs={12} sm={8}>
      <ReferenceField source="serviceType_id" reference="service_type">
        <SelectInput label="Chọn loại dịch vụ" optionText="name" validate={req} fullWidth />
      </ReferenceField>
    </Grid>
    <Grid item xs={12} sm={8}>
      <NumberInput label="Giá" source="price" fullWidth validate={req} />
    </Grid>
  </Grid>
);

const req = [required()];
