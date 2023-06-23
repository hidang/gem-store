import { useState } from 'react';
import Box from '@mui/material/Box';

import { useTranslate, DashboardMenuItem, MenuItemLink, MenuProps, useSidebarState } from 'react-admin';

import products from '../models/products';
import suppliers from '../models/suppliers';
import reciepts from '../models/reciepts';
import productTypes from '../models/productTypes';
import units from '../models/units';
import clients from '../models/clients';
import sales from '../models/sales';
import inventory from '../models/inventory';

import SubMenu from './SubMenu';

type MenuName = 'menuCatalog' | 'menuSales' | 'menuCustomers';

const Menu = ({ dense = false }: MenuProps) => {
    const [state, setState] = useState({
        menuCatalog: true,
        menuSales: true,
        menuCustomers: true
    });
    const translate = useTranslate();
    const [open] = useSidebarState();

    const handleToggle = (menu: MenuName) => {
        setState((state) => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <Box
            sx={{
                width: open ? 250 : 50,
                marginTop: 1,
                marginBottom: 1,
                transition: (theme) =>
                    theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen
                    })
            }}>
            

            <SubMenu
                handleToggle={() => handleToggle('menuCatalog')}
                isOpen={state.menuCatalog}
                name="Sản Phẩm"
                icon={<products.icon />}
                dense={dense}>
                <MenuItemLink
                    to="/unit"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Đơn vị`, {
                        smart_count: 2
                    })}
                    leftIcon={<units.icon/>}
                    dense={dense}
                />
                <MenuItemLink
                    to="/product_type"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Loại sản phẩm`, {
                        smart_count: 2
                    })}
                    leftIcon={<productTypes.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/supplier"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Nhà cung cấp`, {
                        smart_count: 2
                    })}
                    leftIcon={<suppliers.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/purchase_invoice"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Đơn mua hàng`, {
                        smart_count: 2
                    })}
                    leftIcon={<reciepts.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/product"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Sản phẩm`, {
                        smart_count: 2
                    })}
                    leftIcon={<products.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/sales_invoice"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Đơn bán hàng`, {
                        smart_count: 2
                    })}
                    leftIcon={<sales.icon />}
                    dense={dense}
                />
                  
                <MenuItemLink
                    to="/product_in_stock"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Tồn kho`, {
                        smart_count: 2
                    })}
                    leftIcon={<inventory.icon />}
                    dense={dense}
                />
            </SubMenu>


            <SubMenu
                handleToggle={() => handleToggle('menuCatalog')}
                isOpen={state.menuCatalog}
                name="Dịch vụ"
                icon={<products.icon />}
                dense={dense}>
                <MenuItemLink
                    to="/service_type"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Thêm dịch vụ`, {
                        smart_count: 2
                    })}
                    leftIcon={<products.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/service"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Tạo phiếu dịch vụ`, {
                        smart_count: 2
                    })}
                    leftIcon={<products.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/service_invoice"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Danh sách phiếu dịch vụ`, {
                        smart_count: 2
                    })}
                    leftIcon={<products.icon />}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuCatalog')}
                isOpen={state.menuCatalog}
                name="Thông tin người dùng"
                icon={<clients.icon />}
                dense={dense}>
                <MenuItemLink
                    to="/customer"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Thông tin khách hàng`, {
                        smart_count: 2
                    })}
                    leftIcon={<clients.icon />}
                    dense={dense}
                />

            </SubMenu>

        </Box>
    );
};

export default Menu;
