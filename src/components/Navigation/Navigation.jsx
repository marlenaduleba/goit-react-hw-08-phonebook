import { NavLink } from "react-router-dom";
import { useAuth } from "hooks/useAuth.js";
import { Button } from "@mui/material";

export const Navigation = () => {
const {isLoggedIn} = useAuth();

    return <nav>
      <Button variant="nav"  to="/" component={NavLink}  >Home</Button >
      {isLoggedIn && (   

      <Button variant="nav" sx={{ marginLeft: 2}}  to="/contacts" component={NavLink} >Contacts</Button >
      )}   
    </nav>
  };