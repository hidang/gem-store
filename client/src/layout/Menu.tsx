import { useState } from 'react';
import Box from '@mui/material/Box';

import { useTranslate, DashboardMenuItem, MenuItemLink, MenuProps, useSidebarState } from 'react-admin';

import products from '../models/products';

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
                width: open ? 200 : 50,
                marginTop: 1,
                marginBottom: 1,
                transition: (theme) =>
                    theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen
                    })
            }}>
            <DashboardMenuItem />

            <SubMenu
                handleToggle={() => handleToggle('menuCatalog')}
                isOpen={state.menuCatalog}
                name="Sản Phẩm"
                icon={<products.icon />}
                dense={dense}>
                <MenuItemLink
                    to="/productTypes"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Loại sản phẩm`, {
                        smart_count: 2
                    })}
                    leftIcon={<products.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/units"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Đơn vị`, {
                        smart_count: 2
                    })}
                    leftIcon={<products.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/suppliers"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Nhà cung cấp`, {
                        smart_count: 2
                    })}
                    leftIcon={<products.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/reciepts"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Đơn mua hàng`, {
                        smart_count: 2
                    })}
                    leftIcon={<products.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/categories"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Đơn bán hàng`, {
                        smart_count: 2
                    })}
                    leftIcon={<products.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/products"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Sản phẩm`, {
                        smart_count: 2
                    })}
                    leftIcon={<products.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/categories"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Báo cáo tồn kho`, {
                        smart_count: 2
                    })}
                    leftIcon={<products.icon />}
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
                    to="/serviceTypes"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Danh sách dịch vụ`, {
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
                icon={<products.icon />}
                dense={dense}>
                <MenuItemLink
                    to="/clients"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Thông tin khách hàng`, {
                        smart_count: 2
                    })}
                    leftIcon={<products.icon />}
                    dense={dense}
                />
                
            </SubMenu>
            
        </Box>
    );
};

export default Menu;
