import * as React from "react";
import { ReferenceField, ReferenceFieldProps, TextField } from "react-admin";

interface Props {
  source?: string;
}

const serviceReferenceField = (
  props: Props & Omit<ReferenceFieldProps, "source" | "reference" | "children">
) => (
  <ReferenceField
    label="Service"
    source="Service_id"
    reference="Services"
    {...props}
  >
    <TextField source="reference" />
  </ReferenceField>
);

serviceReferenceField.defaultProps = {
  source: "Service_id",
};

export default serviceReferenceField;
