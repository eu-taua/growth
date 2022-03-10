import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface ImenuProp {
  handleMenuClose: () => void;
  isMenuOpen: boolean;
  anchorEl: HTMLElement | null | undefined;
}

const HeaderMenu: React.FC<ImenuProp> = ({
  handleMenuClose,
  isMenuOpen,
  anchorEl,
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={"primary-search-account-menu"}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
      <MenuItem onClick={handleMenuClose}>Minha Conta</MenuItem>
    </Menu>
  );
};

export default HeaderMenu;
