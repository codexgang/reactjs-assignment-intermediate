import { AppBar, Button, Toolbar} from "@mui/material"
import { Link } from "react-router-dom"


const Navbar = () => {
return (
    <AppBar sx={{alignItems:"center", backgroundColor:"#010101"}}>
        <Toolbar>
          <Button sx={{ marginRight: "20px"}} color="inherit" variant="text" component={Link} to={'/'}>Home</Button>
            <Button sx={{ marginRight: "20px"}}  color="inherit" variant="text" component={Link} to={'/contact'}>Contact</Button>
            <Button sx={{ marginRight: "20px"}}  color="inherit" variant="text" component={Link} to={'/myaccount'} >My MyAccount</Button>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar