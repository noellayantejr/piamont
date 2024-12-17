import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Academic Calendar', path: '/academic-calendar' },
  { label: 'Requirements', path: '/requirements' },
  { label: 'About Us', path: '/about-us' },
];

function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar
      component="nav"
      sx={{
        backgroundColor: '#c62b31de',
        height: '80px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Toolbar>
        <div style={{ width: '65px', margin: '15px 10px 15px 50px' }}>
          <img
            src={require('../../assets/images/logo.png')}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
            alt="Logo"
          />
        </div>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: 'none', sm: 'block' },
            fontSize: '28px',
            fontFamily: 'Poppins',
            fontWeight: 600,
          }}
        >
          Piamont School
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              onClick={() => navigate(item.path)}
              sx={{
                color: '#fff',
                marginRight: '30px',
                fontSize: '16px',
                textTransform: 'capitalize',
                fontFamily: 'Roboto',
                fontWeight: '400'
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
