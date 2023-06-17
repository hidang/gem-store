import * as React from "react";
import { ReferenceField, ReferenceFieldProps, TextField } from "react-admin";

interface Props {
  source?: string;
}

const RecieptReferenceField = (
  props: Props & Omit<ReferenceFieldProps, "source" | "reference" | "children">
) => (
  <ReferenceField
    label="Reciept"
    source="Reciept_id"
    reference="Reciepts"
    {...props}
  >
    <TextField source="reference" />
  </ReferenceField>
);

RecieptReferenceField.defaultProps = {
  source: "Reciept_id",
};

export default RecieptReferenceField;
