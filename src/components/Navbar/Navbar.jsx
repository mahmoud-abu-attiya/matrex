import React,{ useState } from "react";
import "./Navbar.scss";
// import logo from "../../images/logo.png";
import { Badge } from "@material-ui/core";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
// import SearchIcon from "@material-ui/icons/Search";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const Navbar = () => {
  const [state, setState] = useState({
    checked: false,
  });

  const handleDarkMode = (e) => {
    setState({  checked : e.target.checked });
    document.body.classList.toggle('dark');
  }
  return (
    <nav className="bg-gray-200 text-gray-900">
      <div className="container">
        <div className="theme">
          <FormControlLabel
            control={
              <Switch
                checked={state.checked}
                onChange={handleDarkMode}
                color="primary"
              />
            }
            label="Dark"
          />
        </div>

        <div className="nav-logo">
          <span className="text-3xl font-bold">المصري</span>
        </div>

        <div className="cart">
          <Badge badgeContent={4} color="error">
            <ShoppingCartTwoToneIcon />
          </Badge>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
