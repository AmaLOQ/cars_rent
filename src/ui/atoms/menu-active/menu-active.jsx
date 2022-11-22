import * as React from 'react';
import { ActiveMenuBtn, MenuActive, MenuItemActive } from './menu-active-style';
import useStyles from './menu-active-style';


export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
//   const classes = useStyles();

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
        <MenuItemActive onClick={handleClose}>Аренда авто</MenuItemActive>
        <MenuItemActive onClick={handleClose}>Условия</MenuItemActive>
        <MenuItemActive onClick={handleClose}>Цены</MenuItemActive>
      </MenuActive>
    </div>
  );
}