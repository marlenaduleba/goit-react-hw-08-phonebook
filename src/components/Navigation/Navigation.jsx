import { NavLink } from "react-router-dom";
import { useAuth } from "hooks/useAuth.js";

import { Box, Button } from "@mui/material";

export const Navigation = () => {
const {isLoggedIn} = useAuth();

    return <Box component='nav' sx={{display: 'flex', gap: 2, flexWrap: 'wrap'}}>
      <Button variant="nav"  to="/" component={NavLink}  >Home</Button >
      {isLoggedIn && (   

      <Button variant="nav"  to="/contacts" component={NavLink} >Contacts</Button >
      )}   
    </Box>
  };