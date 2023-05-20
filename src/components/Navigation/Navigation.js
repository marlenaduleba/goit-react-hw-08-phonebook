import { NavLink } from "react-router-dom";
import { useAuth } from "hooks/useAuth.js";
import { NavButton  } from "styles/styles.js";

export const Navigation = () => {
const {isLoggedIn} = useAuth();

    return <nav>
      <NavButton  to="/" component={NavLink}  >Home</NavButton >
      {isLoggedIn && (   

      <NavButton sx={{ marginLeft: 2}}  to="/contacts" component={NavLink} >Contacts</NavButton >
      )}   
    </nav>
  };