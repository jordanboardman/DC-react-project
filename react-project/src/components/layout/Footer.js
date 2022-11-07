import React from "react";
import { AppBar, Box, Typography, Toolbar } from "@mui/material";
import { Container } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#CC8E69",
        display: "flex",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Typography sx={{ fontWeight: "bolder" }}>Yo</Typography>

        <Typography sx={{ fontWeight: "bolder" }}>Yo</Typography>

        <Typography sx={{ fontWeight: "bolder" }}>Yo</Typography>

        <Typography sx={{ fontWeight: "bolder" }}>Yo</Typography>
      </Toolbar>
    </AppBar>
    // <Box
    //   sx={{
    //     backgroundColor: "#CC8E69",
    //     display: "flex",
    //     position: "fixed",
    //     bottom: 0,
    //     width: "100%",
    //     paddingBottom: "43px",
    //   }}
    // >
    //   <Container
    //     sx={{
    //       display: "flex",
    //       justifyContent: "center",
    //     }}
    //   >
    //     <Typography>Hello Footer</Typography>
    //   </Container>
    // </Box>
  );
};

export default Footer;
