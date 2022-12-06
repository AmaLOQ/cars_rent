import * as React from 'react';
import { StyledActiveMenuBtn, StyledMenuActive, StyledMenuItemActive} from './menu-active-style';
import { Link } from '../link/link';
import Arrow from '@mui/icons-material/KeyboardArrowRight';


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
      <StyledActiveMenuBtn
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<Arrow/>}
      >
        Аренда авто
      </StyledActiveMenuBtn>
      <StyledMenuActive
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
        <StyledMenuItemActive onClick={handleClose}><Link text="Аренда авто" variant="menuActive"/></StyledMenuItemActive>
        <StyledMenuItemActive onClick={handleClose}><Link text="Условия" variant="menuActive"/></StyledMenuItemActive>
        <StyledMenuItemActive onClick={handleClose}><Link text="Цены" variant="menuActive"/></StyledMenuItemActive>
      </StyledMenuActive>
    </div>
  );
}