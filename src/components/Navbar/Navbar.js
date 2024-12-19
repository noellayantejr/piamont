import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Gallery", path: "/gallery" },
  { label: "Admissions", path: "/admissions" },
  { label: "Careers", path: "/careers" },
  { label: "Contact us", path: "/contact-us" },
];

function Navbar() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileSubMenu, setShowMobileSubMenu] = useState(false);

  const menuRef = useRef(null);
  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <AppBar component="nav" className="nav-bar-container ">
      <Toolbar>
        <div>
          <img
            src={require("../../assets/images/logo.png")}
            className="logo-image"
            alt="Logo"
          />
        </div>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block" },
            fontSize: "23px",
            fontFamily: "Poppins",
            fontWeight: 600,
          }}
        >
          PiaMont Peñafrancia Science Oriented School Inc.
        </Typography>

        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "block", sm: "none" },
            fontSize: "20px",
            fontFamily: "Poppins",
            fontWeight: 600,
          }}
        >
          PiaMont School
        </Typography>

        <MenuIcon
          className="mobile-menu"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <React.Fragment key={item.label}>
              {item.label === "Admissions" ? (
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <Button
                    sx={{
                      color: "#fff",
                      marginRight: "20px",
                      fontSize: "16px",
                      textTransform: "capitalize",
                      fontFamily: "Roboto",
                      fontWeight: "400",
                    }}
                  >
                    {item.label} <KeyboardArrowDownIcon />
                  </Button>
                  {showDropdown && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        backgroundColor: "#fff",
                        color: "#000",
                        padding: "10px 20px",
                        borderRadius: "4px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        zIndex: 1000,
                        fontSize: "15px",
                        fontFamily: "Roboto",
                        width: "100px",
                      }}
                    >
                      <div
                        className="menu-item"
                        onClick={() =>
                          (window.location.href = "/admissions/preschool")
                        }
                      >
                        Preschool
                      </div>
                      <div
                        className="menu-item"
                        onClick={() =>
                          (window.location.href = "/admissions/elementary")
                        }
                      >
                        Elementary
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Button
                  onClick={() => navigate(item.path)}
                  sx={{
                    color: "#fff",
                    marginRight: "20px",
                    fontSize: "16px",
                    textTransform: "capitalize",
                    fontFamily: "Roboto",
                    fontWeight: "400",
                  }}
                >
                  {item.label}
                </Button>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Toolbar>

      <div
        ref={menuRef}
        className="mobile-menu-container"
        style={{ display: showMobileMenu ? "block" : "none" }}
      >
        <p onClick={() => (window.location.href = "/")}>Home</p>
        <p onClick={() => (window.location.href = "/about-us")}>About Us</p>
        <p onClick={() => (window.location.href = "/gallery")}>Gallery</p>
        <p onClick={() => setShowMobileSubMenu(!showMobileSubMenu)} className="mobile-admissions-menu">
          Admissions <KeyboardArrowDownIcon fontSize="12px" style={{marginLeft: 5}}/>
        </p>
        <div
          className="mobile-sub-menu-container"
          style={{ display: showMobileSubMenu ? "block" : "none" }}
        >
          <p onClick={() => (window.location.href = "/admissions/preschool")}>
            Preschool
          </p>
          <p onClick={() => (window.location.href = "/admissions/elementary")}>
            Elementary
          </p>
        </div>
        <p onClick={() => (window.location.href = "/careers")}>Careers</p>
        <p onClick={() => (window.location.href = "/contact-us")}>Contact us</p>
      </div>
    </AppBar>
  );
}

export default Navbar;
