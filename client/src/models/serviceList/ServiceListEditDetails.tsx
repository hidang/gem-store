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
  BooleanInput,
  DateInput,
  FormDataConsumer  
} from "react-admin";
import { InputAdornment, Grid } from "@mui/material";

const convertStringToNumber = (value: any) => {
  const float = parseFloat(value);
  return isNaN(float) ? null : "0" + float;
};

export const ServiceListEditDetails = () => (
  <Grid container columnSpacing={2}>
    <Grid item xs={12} sm={8}>
    <FormDataConsumer>
      {({ formData }) => (
        <input type="hidden" name="name" value={formData.name || ''} />
      )}
</FormDataConsumer>
      <ReferenceInput source="serviceInvoice_id" reference="customer">
        <SelectInput label="Khách hàng" optionText="name" validate={req} fullWidth />
      </ReferenceInput>
    </Grid>
    <Grid item xs={12} sm={8}>
      <ReferenceInput source="serviceType_id" reference="service_type">
        <SelectInput label="Chọn loại dịch vụ" optionText="name" validate={req} fullWidth />
      </ReferenceInput>
    </Grid>
    <Grid item xs={12} sm={8}>
      <NumberInput label="Tiền trả trước" source="prepay" fullWidth validate={req} />
      <NumberInput label="Chi phí thêm" source="extraPrice" fullWidth validate={req} />
      <NumberInput label="Số lượng" source="count" fullWidth validate={req} />
      <BooleanInput label="Tình trạng" source="status" fullWidth validate={req} />
      <DateInput label="Ngày lập" source="deliveryDate" fullWidth validate={req} />
    </Grid>
  </Grid>
);

const req = [required()];
