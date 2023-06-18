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

import { ClientEditDetails } from "./ClientEditDetails";

const ClientEdit = () => (
  <Edit>
    <TabbedForm>
      <TabbedForm.Tab
        label="Chỉnh sửa thông tin khách hàng"

        sx={{ maxWidth: "40em" }}
      >
        <ClientEditDetails />
      </TabbedForm.Tab>

    </TabbedForm>
  </Edit>
);

const req = [required()];

export default ClientEdit;
