import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "./layout.css";
import { Container, Box } from "@mui/material";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="lg">
        <Box>
          <main className="main-layout">{props.children}</main>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Layout;
