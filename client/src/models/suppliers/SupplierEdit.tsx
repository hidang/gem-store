import * as React from "react";
import {
  Datagrid,
  DateField,
  Edit,
  EditButton,
  Pagination,
  ReferenceManyField,
  ReferenceManyCount,
  required,
  TabbedForm,
  TextField,
  TextInput,
  useRecordContext,
} from "react-admin";

import { SupplierEditDetails } from "./SupplierEditDetails";

const SupplierEdit = () => (
  <Edit>
    <TabbedForm>
      <TabbedForm.Tab
        label="Chỉnh sửa nhà cung cấp"

        sx={{ maxWidth: "40em" }}
      >
        <SupplierEditDetails />
      </TabbedForm.Tab>

    </TabbedForm>
  </Edit>
);

const req = [required()];

export default SupplierEdit;
