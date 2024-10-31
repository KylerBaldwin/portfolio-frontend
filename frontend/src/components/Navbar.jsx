// src/components/Navbar.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          {/* Menu Icon for Mobile */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Brand Logo */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Portfolio
          </Typography>

          {/* Navigation Links */}
          <Link href="#projects" color="inherit" underline="none" sx={{ mx: 1 }}>
            Projects
          </Link>
          <Link href="#about" color="inherit" underline="none" sx={{ mx: 1 }}>
            About
          </Link>
          <Link href="#contact" color="inherit" underline="none" sx={{ mx: 1 }}>
            Contact
          </Link>

          {/* Button */}
          <Button color="secondary" variant="contained" sx={{ ml: 2 }}>
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;