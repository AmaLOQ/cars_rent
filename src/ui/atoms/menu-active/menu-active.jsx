import * as React from 'react';
import { ActiveMenuBtn, MenuActive, MenuItemActive } from './menu-active-style';

export const PositionedMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ActiveMenuBtn
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Аренда авто
      </ActiveMenuBtn>
      <MenuActive
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItemActive onClick={handleClose}><a href="#">Аренда авто</a></MenuItemActive>
        <MenuItemActive onClick={handleClose}><a href="#">Условия</a></MenuItemActive>
        <MenuItemActive onClick={handleClose}><a href="#">Цены</a></MenuItemActive>
      </MenuActive>
    </div>
  );
}