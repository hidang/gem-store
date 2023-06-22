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
    const record = useRecordContext<Service>();
    if (!record) return null;
    return (
       
        <ArrayField source="serviceList">
            <Datagrid bulkActionButtons={false}>
            <TextField label="Id" source="id" />
                <TextField label="Loại dịch vụ " source="name" />
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
                <BooleanField label="Tình trạng" source="status" />

            </Datagrid>
        </ArrayField>
    );
};


export default ServiceShow;
