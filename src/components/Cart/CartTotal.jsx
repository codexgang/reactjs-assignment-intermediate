import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useSelector} from "react-redux"

const CartTotal = () => {
  const totalAmount = useSelector(state => state.cart.totalPrice)
  return (
    <Card sx={{ flex: 1, height: "265px", padding: "5px", marginBottom:"5px" }}>
      <CardContent>
      <Typography variant="h6"  textAlign="center">
        Cart Total
        </Typography>

        <Typography variant="body2" sx={{fontWeight:"bold", textAlign:"center", margin: "20px"}}>
        ${totalAmount.toFixed(2)}
        </Typography>
     
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button variant="contained" sx={{backgroundColor:"#010101"}}>
          Checkout
        </Button>
      </CardActions>

 
  </Card>
  )
}

export default CartTotal