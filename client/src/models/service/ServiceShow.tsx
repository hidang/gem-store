import * as React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { Link, ReferenceField, TextField, useGetMany, useRecordContext, Datagrid,BooleanField, ArrayField, FunctionField, NumberField } from 'react-admin';
import { Product, Service } from '../../types';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';




const ServiceShow = () => {
    return (
        <ArrayField source="services">
            <Datagrid bulkActionButtons={false}>
            <TextField label="Id" source="id" />
                <ReferenceField label="Loại dịch vụ" source="serviceType_id" reference="service_type">
                    <NumberField label="Loại dịch vụ" source="name" />
                </ReferenceField>
                <NumberField label="Tiền phát sinh" source='extraPrice'/>
                <NumberField label="Số lượng" source="count" />
                <NumberField label="Thanh toán trả trước" source='prepay'/>
                <FunctionField
                    label="Ngày giao"
                    render={(record: { deliveryDate: string }) => {
                        const createdAt = new Date(record.deliveryDate);
                        const year = createdAt.getFullYear();
                        const month = String(createdAt.getMonth() + 1).padStart(2, '0');
                        const day = String(createdAt.getDate()).padStart(2, '0');
                        return `${day}-${month}-${year}`;
                    }}
                />
                <ReferenceField label="Tổng tiền" source="serviceType_id" reference="service_type">
                    <NumberField label="Tổng tiền" source="price" />
                </ReferenceField>
                <BooleanField label="Tình trạng" source="status" />

            </Datagrid>
        </ArrayField>
    );
};


export default ServiceShow;
