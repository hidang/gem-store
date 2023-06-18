import {

    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Show,
    ArrayField,
    ChipField,
    SimpleShowLayout,
    SingleFieldList
} from 'react-admin';

const RecieptShow = () => {
    return (

    
        <SimpleShowLayout>
            
                <TextField source="id" />
                <TextField source="Reciept code" />
                <TextField source="Date" />
                <TextField source="supplier_id" />
                <TextField source="supplier name" />
                <TextField source="2" />


                <ArrayField source="Product">
                    <Datagrid bulkActionButtons={false}>
                        <TextField source="id" />
                        <TextField source="Product name" />
                        <TextField source="productType_id" />
                        <TextField source="Product code" />
                        <TextField source="Quantity" />
                        <TextField source="Unit" />
                        <TextField source="Price" />
                        <TextField source="Total Price" />
                    </Datagrid>
                </ArrayField>
           
        </SimpleShowLayout>
    
    )
};



export default RecieptShow;
