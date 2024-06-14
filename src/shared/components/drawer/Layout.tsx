import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import LogoutIcon from "@mui/icons-material/Logout";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import {
  Box,
  CssBaseline,
  Toolbar,
  IconButton,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  useMediaQuery,
  styled,
} from "@mui/material";
import { DrawerApp, DrawerHeader, AppBar, Overlay } from "./Components";
import { navMenu } from "../../constants/menu";
import { Outlet } from "react-router-dom";
import { LinkApp } from "../../UI/link/LinkApp";
import { useAppSelector } from "../../../redux/hooks";
import { deleteCookie } from "../../helpers/cookie";
import { ModalApp } from "../../UI/modal/ModalApp";

const pureFn = () => {};

export function Layout() {
  const { userData: user } = useAppSelector((state) => state.user);

  const initialOpenMenu = useMediaQuery("(min-width:1000px)");
  const [open, setOpen] = React.useState(initialOpenMenu);
  const [showModal, setShowModal] = React.useState(false);
  const isScreen600 = useMediaQuery("(min-width: 600px)");

  const handleDrawerToggle = () => {
    setOpen((isOpen) => !isOpen);
  };

  const handleDrawerHide = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    deleteCookie("token");
    window.location.replace(import.meta.env.VITE_REDIRECT_AUTH);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <MenuIconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle} edge="start">
              {open ? <MenuOpenIcon /> : <MenuIcon />}
            </MenuIconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              {user?.firstName} {user?.lastName}
            </Typography>
            <LinkApp
              to={import.meta.env.VITE_REDIRECT_HOME}
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              {isScreen600 ? (
                <Button variant="outlined" sx={{ color: "white", borderColor: "white" }}>
                  Вернуться на сайт
                </Button>
              ) : (
                <LogoutIcon sx={{ color: "white", fontSize: 28 }} />
              )}
            </LinkApp>
          </Toolbar>
        </AppBar>
        <DrawerApp variant="permanent" open={open}>
          <List sx={{ flexGrow: 1, mt: 8 }}>
            {navMenu.map((menuItem) => (
              <ListItem
                disablePadding
                sx={{ display: "block" }}
                key={menuItem.path}
                onClick={isScreen600 ? pureFn : handleDrawerHide}
              >
                <LinkApp to={menuItem.path} style={{ color: "inherit" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {menuItem.icon}
                    </ListItemIcon>

                    <ListItemText primary={menuItem.title} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </LinkApp>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={handleShowModal}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <ExitToAppIcon />
                </ListItemIcon>

                <ListItemText primary={"Выйти"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </List>
        </DrawerApp>
        <Overlay open={open} onClick={handleDrawerHide} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
      <ModalApp
        isOpen={showModal}
        handelCloseModal={handleHideModal}
        title={"Вы действительно хотите выйти?"}
        actions={
          <>
            <Button onClick={handleLogout} color="primary">
              Выйти
            </Button>
            <Button onClick={handleHideModal} color="secondary">
              Отмена
            </Button>
          </>
        }
      />
    </>
  );
}

const MenuIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: 20,

  [theme.breakpoints.down("sm")]: {
    marginRight: 8,
  },
}));
