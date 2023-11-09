"use client";
//Module imports
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  Link,
  Typography,
} from "@mui/material";
import { logout } from "@/utils/utils";

export default function NavBar() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const router = useRouter();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ marginBottom: "5vh" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            sx={{
              display: "flex",
              flexGrow: 1,
              alignItems: "center",
              gap: "1vw",
            }}
            href="/admin"
          >
            <Image
              src="/boba.png"
              alt="Boba Icon"
              width={45}
              height={45}
            ></Image>
            <Typography variant="h2" color="textSecondary">
              BobaLevel
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Peter Feng" src="/boba.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                component="a"
                href="/admin/"
                onClick={handleCloseUserMenu}
              >
                <Typography color="textSecondary" textAlign="center">
                  Dashboard
                </Typography>
              </MenuItem>
              <MenuItem
                component="a"
                href="/admin/settings"
                onClick={handleCloseUserMenu}
              >
                <Typography color="textSecondary" textAlign="center">
                  Settings
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  logout();
                  router.push("/login");
                }}
              >
                <Typography color="textSecondary" textAlign="center">
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
