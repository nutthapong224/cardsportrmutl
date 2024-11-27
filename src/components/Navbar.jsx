import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logos.png";

const Navbar = () => {
  return (
    <AppBar position="static" color="gray" sx={{ mb: 5 }}>
      <Toolbar> 
        
      <Box
  component={RouterLink}
  to="/"
  sx={{ display: "flex", alignItems: "center", mr: 2 }} // Center-align the logo with text, add margin
>
  <Box
    component="img"
    src={logo}
    alt="Logo"
    sx={{
      height: { xs: 40, sm: 50 }, // Adjusts for different screen sizes
      width: "auto",               // Maintain aspect ratio
    }}
  />
</Box>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "inherit",
            fontFamily: "'Kanit', sans-serif",
          }}
        >
          พุทธรักษาเกมส์
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
