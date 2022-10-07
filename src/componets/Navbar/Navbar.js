import "./index.css";
// custom styles
import Logo from "../../assets/images/logo-modified.png";

import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
// material design
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@mui/material";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
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
      position="static"
      sx={{
        background: "#1F1F1Fff",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          background: "#1F1F1Fff",
        }}
      >
        <Toolbar disableGutters>
          <Link
            className="logo"
            to="/"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          >
            <img src={Logo} alt="logo" />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
              <MenuItem>
                <Link href="/" exact="true" activeclassname="active">
                  {" "}
                  <Typography textAlign="center">Home</Typography>{" "}
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="/About"
                  exact="true"
                  activeclassname="active"
                  className=" about-link"
                >
                  {" "}
                  <Typography textAlign="center">About</Typography>{" "}
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="/Contact"
                  exact="true"
                  activeclassname="active"
                  className=" contact-link"
                >
                  {" "}
                  <Typography textAlign="center">Contact</Typography>{" "}
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Link
            className="logo"
            to="/"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          >
            <img src={Logo} alt="logo" />
          </Link>
          <Box
            className="homerow"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Link href="/">
              <IconButton
                to={"/"}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                <FontAwesomeIcon icon={faHome} color="#4d4d4de" />
              </IconButton>
            </Link>
            <Link href="/About">
              <IconButton
                to={"/"}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                <FontAwesomeIcon icon={faUser} color="#4d4d4de" />
              </IconButton>
            </Link>
            <Link href="/Contact">
              <IconButton
                to={"/"}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4de" />
              </IconButton>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
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
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">test</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
