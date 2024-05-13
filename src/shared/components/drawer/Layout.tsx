import React from "react";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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
} from "@mui/material";
import { DrawerApp, DrawerHeader, AppBar } from "./Components";
import { navMenu } from "../../constants/menu";
import { Outlet } from "react-router-dom";
import { LinkApp } from "../../UI/link/LinkApp";

export function Layout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Admin dashboard
          </Typography>
          <LinkApp to={import.meta.env.VITE_REDIRECT_AUTH}>
            <Button variant="outlined" sx={{ color: "white", borderColor: "white" }}>
              Logout
            </Button>
          </LinkApp>
        </Toolbar>
      </AppBar>
      <DrawerApp variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ flexGrow: 1 }}>
          {navMenu.map((menuItem) => (
            <ListItem disablePadding sx={{ display: "block" }} key={menuItem.path}>
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
            <LinkApp to={import.meta.env.VITE_REDIRECT_HOME} style={{ color: "inherit" }}>
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
                  <ExitToAppIcon />
                </ListItemIcon>

                <ListItemText primary={"Вернуться"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </LinkApp>
          </ListItem>
        </List>
      </DrawerApp>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
