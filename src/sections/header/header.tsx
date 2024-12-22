"use client"

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Popper,
  Paper,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = {
    Home: "Welcome to the Home section. Here is some introductory content.",
    About: "Learn more about us in the About section.",
    Contact: "Get in touch with us through the Contact section.",
    Prices: "Check out our competitive Prices here.",
  };

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>, section: string) => {
    setAnchorEl(event.currentTarget);
    setHoveredSection(section);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setHoveredSection(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        color: "black",
        boxShadow: "none",
        padding: { xs: "0.5rem", sm: "1rem" }, // Padding adjusts for small screens
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: {sm:"right", md:"center"}, // Adjust for mobile and desktop
        }}
      >
        

        {/* Desktop Menu */}
        <Box
          sx={{
            display: { xs: "none", md: "flex", }, // Hide on small screens
            gap: 2,
          }}
        >
          {Object.keys(sections).map((section) => (
            <Button
              key={section}
              color="inherit"
              onMouseEnter={(e) => handlePopoverOpen(e, section)}
              onMouseLeave={handlePopoverClose}
              sx={{
                
                transition: "background-color 0.3s, color 0.3s",
                "&:hover": { backgroundColor: "black", color: "white" },
                fontFamily: "'Roboto Mono', sans-serif",
              }}
            >
              {section}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu Toggle */}
        <IconButton
          edge="end"
          color="inherit"
          sx={{ display: { md: "none" } }} // Show on small screens only
          onClick={toggleMobileMenu}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Dropdown Popper for hovered section */}
      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        placement="bottom"
        disablePortal
        onMouseEnter={() => setAnchorEl(anchorEl)} // Keep popper open on hover
        onMouseLeave={handlePopoverClose}
      >
        <Paper
          elevation={3}
          sx={{
            fontFamily: "Roboto Mono",
            padding: 3,
            borderRadius: 3,
            maxHeight: 100,
            maxWidth: 400,
            textAlign: "center",
            backgroundColor: "white",
          }}
        >
          
          <Typography
            sx={{ fontFamily: "'Roboto Mono', sans-serif" }}
            variant="body1"
          >
  {sections[hoveredSection as keyof typeof sections] || "No Section Selected"}
  </Typography>
        </Paper>
      </Popper>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{ display: { md: "none" } }} // Only show on small screens
      >
        <Box sx={{ width: 250, padding: 2 }}>
          <List>
            {Object.keys(sections).map((section) => (
              <ListItem button key={section} onClick={toggleMobileMenu}>
                <ListItemText primary={section} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
