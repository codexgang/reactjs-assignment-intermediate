import { AppBar, Badge, Button, IconButton, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux"


const Navbar = () => {
  const cartValue = useSelector(state => state.cart.cart.length)
  return (
    <AppBar sx={{ alignItems: "center", backgroundColor: "#010101" }}>
      <Toolbar>
        <Button
          sx={{ marginRight: "20px" }}
          color="inherit"
          variant="text"
          component={Link}
          to={"/"}
        >
          Home
        </Button>
        <Button
          sx={{ marginRight: "20px" }}
          color="inherit"
          variant="text"
          component={Link}
          to={"/contact"}
        >
          Contact
        </Button>
        <Button
          sx={{ marginRight: "20px" }}
          color="inherit"
          variant="text"
          component={Link}
          to={"/myaccount"}
        >
          MyAccount
        </Button>
        <IconButton component={Link} to="/cart">
          <Badge badgeContent={ cartValue > 0 ? cartValue:0} color="primary">
            <ShoppingCartIcon sx={{ color: "white" }} />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
