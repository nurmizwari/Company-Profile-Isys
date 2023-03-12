import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../style/navbar.scss";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Homes", "Courses", "Teacher", "Contact", "Login", "Sign up"];
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      className="appbar"
      position="static"
      color="transparent"
      sx={{ boxShadow: "none", display: "sticky" }}
    >
      <Toolbar>
        <div className="iconMenu">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: { xs: "flex", md: "none", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Box
          className="Inavbar"
          sx={{
            // display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            // border: "1px solid red",
            display: { xs: "none", md: "flex", sm: "flex" },
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography
              className="edu"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: "700" }}
            >
              Edu.dot
            </Typography>
          </div>
          <div
            style={{ display: "flex", gap: "40px", justifyContent: "center" }}
          >
            <Typography
              className="homes"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Homes
            </Typography>
            <Typography
              className="nav"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Courses
            </Typography>
            <Typography
              className="nav"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Teacher
            </Typography>
            <Typography
              className="nav"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Contact
            </Typography>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "32px",
            }}
          >
            <Typography
              className="nav"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Log in
            </Typography>
            <Button
              sx={{
                width: "109px",
                height: "48px",
                fontWeight: "600",
                fontSize: "16px",
                background: "#e64936",
                borderRadius: "28px",
                textTransform: "capitalize",
                color: "white",
              }}
              className="login-button"
            >
              Sign up
            </Button>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
