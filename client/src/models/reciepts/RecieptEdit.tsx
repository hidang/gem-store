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

import { RecieptEditDetails } from "./RecieptEditDetails";

const RecieptEdit = () => (
  <Edit>
    <TabbedForm>
      <TabbedForm.Tab
        label="Chỉnh sửa nhà cung cấp"

        sx={{ maxWidth: "40em" }}
      >
        <RecieptEditDetails />
      </TabbedForm.Tab>

    </TabbedForm>
  </Edit>
);

const req = [required()];

export default RecieptEdit;
